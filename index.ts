//My own implementation of isomorphic fetch, so that I could make jraph smaller
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

interface JraphBasic{
    url: string ;
    options: any;
    query: string;
}

type JraphOptions = JraphBasic;

async function jraph(argv: JraphOptions){
    const url: string = argv.url;
    const headers = { 'Content-Type': 'application/json' };
    const body = JSON.stringify( { query: (argv.query).replace(/([\\][n])?([\s])+/g, " ") } );
    const fetch_options = {
        method: "POST",
        //Defaults go before this line
        ...argv.options,
        //Perms go after
        body,
        headers,
    };
    //const request = await fetch(url, fetch_options).then(res=>res.json());
    return fetch(url, fetch_options).then(res=>res.json());
}
export { jraph, JraphOptions }
export default jraph;