function cleanQueryString(string: string):string{
    //This removes whitespaces and slashes and '\n's
    return string.replace(/([\\][n])?([\s])+/g, " ");
}

function prepareFetchBody(queryString: string):string{   
    return JSON.stringify({ query: queryString });
}

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
        let queryString = "";
        args.forEach( (s, i) => {
            queryString += s + (values[i] || '');
        });
        queryString = cleanQueryString(queryString);
        let body = prepareFetchBody(queryString);
        fetch_options = {...fetch_options, body};
        const request = await fetch(url, fetch_options).then(res=>res.text());
        try{
            let json = JSON.parse(request);
            return json;
        }catch(error){
            return {
                request,
                error
            };
        }
    };
}

export { jraph };