import bcrypt from 'bcrypt'
import { prisma } from '@db/client'
import { NextResponse } from 'next/server';
import { isJSONParsable } from '@lib/utils';
const saltRounds = 10;


export async function POST(req:Request){
    const body = await new Promise((resolve, reject) => {
        let reader = req.body?.getReader().read();
        if(!reader) reject('No reader');
        let data = '';
        reader!.then((result) => {
            data = new TextDecoder("utf-8").decode(result.value);
            resolve(data);
        })
    }) as string;

    if(!body || !isJSONParsable(body)) {
        NextResponse.json({ error: "Please fill in all fields" },{
            status: 400
        })
        return
    }
    const { email, password } =JSON.parse(body)
    if (!email || !password) {
        NextResponse.json({ error: "Please fill in all fields" },{
            status: 400
        })
        return
    }
    const confirmationCode = Math.floor(Math.random() * 899999 + 100000)
    const hash = await bcrypt.hash(password, saltRounds);
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        })
        if (user) {
            return NextResponse.json({ message: "An account with that email already exists" },{
                status: 409
            })
        }
        else {
            const createResult = await prisma.user.create({
                data: {
                    email: email,
                    passwordhash: hash,
                    confirmationCode: confirmationCode,
                    authMethod: 'password'
                },
            })
            // sendConfirmationEmail(email, name, confirmationCode)
            // @ts-ignore
            delete createResult?.passwordhash
            return NextResponse.json(createResult)
        }
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Something went wrong" },{  
            status: 500
        })

    }
}