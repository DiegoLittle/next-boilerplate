export function isJSONParsable(str: string) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

export async function getBody(req: Request): Promise<string> {
    return new Promise((resolve, reject) => {
        let reader = req.body?.getReader().read();
        if (!reader) reject('No reader');
        let data = '';
        reader!.then((result) => {
            data = new TextDecoder("utf-8").decode(result.value);
            resolve(data);
        })
    })
}