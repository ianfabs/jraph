
if(typeof global !== 'undefined'){
    const realFetch = require('node-fetch');
    let fetch = function(url:any, options:any) {
        if (/^\/\//.test(url)) {
            url = 'https:' + url;
        }
        // @ts-ignore
        return realFetch.call(this, url, options);
    };
    // @ts-ignore
    if (!global.fetch) {
        // @ts-ignore
        global.fetch = fetch;
        // @ts-ignore
        global.Response = realFetch.Response;
        // @ts-ignore
        global.Headers = realFetch.Headers;
        // @ts-ignore
        global.Request = realFetch.Request;
    }
}

function cleanQueryString(string: string):string{
    //This removes whitespaces and slashes and '\n's
    return string.replace(/([\\][n])?([\s])+/g, " ");
}

function prepareFetchBody(queryString: string):string{   
    return JSON.stringify({ query: queryString });
}

function jraph(uri: string, args: object): any{
    const headers = { 'Content-Type': 'application/json' };
    let fetch_options = {
        method: "POST",
        body: "",
        ...args,
        headers,
    };
    return async (args: string[], ...values:any)=>{
        let queryString = "";
        args.forEach( (string, i) => {
            queryString += string + (values[i] || '');
        });
        queryString = cleanQueryString(queryString);
        let url = new URL(uri);
        if(fetch_options.method && (fetch_options.method == "GET" || fetch_options.method == "get")) {
            let searchParams = url.searchParams;
            searchParams.append("query", queryString);
        }else {
            let body = prepareFetchBody(queryString);
            fetch_options = {...fetch_options, body};
        }
        const request = await fetch(String(url), fetch_options).then(res=>res.text());
        try{
            let json = JSON.parse(request);
            return json;
        }catch(e){
            return request;
        }
    };
}

export { jraph }