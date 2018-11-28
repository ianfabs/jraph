import es6 from 'es6-promise';
es6.polyfill();
import 'isomorphic-fetch';

interface JraphBasic{
    uri: string;
    options: any;
}

type JraphOptions = JraphBasic;

function cleanQueryString(string: string):string{
    //This removes whitespaces and slashes and '\n's
    return string.replace(/([\\][n])?([\s])+/g, " ");
}

function prepareFetchBody(queryString: string):string{   
    return JSON.stringify({ query: queryString });
}

function jraph(args: JraphOptions){
    let uri : string = args.uri;
    const headers = { 'Content-Type': 'application/json' };
    let options = args.options;
    if(!options.method) options.method = "POST";
    let fetch_options = {
        headers,
        ...options
    };
    return async (args: string[], ...values:any)=>{
        console.log(args);
        //let queryString = args.join("");
        let queryString = "";
        args.forEach( (string, i) => {
            queryString += string + (values[i] || '');
        });
        queryString = cleanQueryString(queryString);
        let url = new URL(uri);
        if(options.method && (options.method == "GET" || options.method == "get")) {
            let searchParams = url.searchParams;
            searchParams.append("query", queryString);
            fetch_options = {...fetch_options};
        }else {
            let body = prepareFetchBody(queryString);
            fetch_options = {...fetch_options, body};
        }
        const request = await fetch(String(url), fetch_options).then(res=>res.json());
        return request;
    };
}
/* 
* Some notes for the next version
*   - Nevermind, I had notes but they were redundant.
*/
export { jraph, JraphOptions }
export default jraph;