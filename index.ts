import es6 from 'es6-promise';
es6.polyfill();

import 'isomorphic-fetch';

interface JraphBasic{
    url: string | Request;
    options: any;
}
abstract class JraphQuery implements JraphBasic{
    url: string = "";
    options: any = {};
    query: string = "";
}
abstract class JraphMutation implements JraphBasic{
    url: string = "";
    options: any = {};
    mutation: string = "";
}

type JraphOptions = JraphQuery | JraphMutation;

async function jraph(argv: JraphOptions){
    const url : string | Request = argv.url;
    const headers = { 'Content-Type': 'application/json' };
    const body = JSON.stringify( (argv instanceof JraphQuery) ? {query: argv.query} : {mutation: argv.mutation} );
    const fetch_options = {
        headers,
        body: body,
        method: "POST",
        ...argv.options
    };
    const request = await fetch(url, fetch_options).then(res=>res.json());
    return request;
    /* 
    * Ask kyle about wether I should return `request` or `request.data`
    */
}

export default jraph;
export { jraph, JraphOptions, JraphQuery, JraphMutation }