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

export function generateUUID() {
    let d = new Date().getTime();
    const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}