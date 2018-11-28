import es6 from 'es6-promise';
es6.polyfill();
import 'isomorphic-fetch';

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