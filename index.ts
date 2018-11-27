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
    constructor(args: any){
        Object.assign(this, args);
    }
}
abstract class JraphMutation implements JraphBasic{
    url: string = "";
    options: any = {};
    mutation: string = "";
    constructor(args: any){
        Object.assign(this, args);
    }
}

type JraphOptions = JraphQuery | JraphMutation;

async function jraph(argv: JraphOptions){
    const url : string | Request = argv.url;
    const headers = { 'Content-Type': 'application/json' };
    const body = JSON.stringify( { query: ( (argv instanceof JraphQuery) ? argv.query : `mutation ${argv.mutation}`).replace(/([\\][n])?([\s])+/g, " ") } );
    //(argv instanceof JraphQuery) ? {query: argv.query} : { query: `mutation ${argv.mutation.replace(/([\\][n])?([\s])+/g, " ")}`} );
    const fetch_options = {
        headers,
        body: body,
        ...argv.options
    };
    console.log(body);
    const request = await fetch(url, fetch_options).then(res=>res.json());
    return request;
}
/* 
* Some notes for the next version
*   - Nevermind, I had notes but they were redundant.
*/
export default jraph;
export { jraph, JraphOptions, JraphQuery, JraphMutation }