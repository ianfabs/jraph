
const jraph = (url: string, options: any) => {
    const headers = { 'Content-Type': 'application/json' };
    let fetch_options = {
        method: "POST",
        body: null,
        headers,
        //Defaults go before this line
        ...options,
        //Perms go after
    };
    return async (args: string[], ...values: any): Promise<any> =>{
        let queryString = args.reduce( (ac, cv, ci) => ac + cv + values[ci] ).replace(/([\\][n])?([\s])+/g, " ");
        fetch_options = {
            ...fetch_options, 
            body: JSON.stringify({ query: queryString }),
        };
        const request = await fetch(url, fetch_options);
        try{
            let json = await request.json();
            return json;
        }catch(error){
            return {
                request: await request.text(),
                error,
            };
        }
    };
}

export { jraph };