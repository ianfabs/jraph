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
    let url : string | Request = argv.url;
    let headers : any = { 'Content-Type': 'application/json' };
    let body = JSON.stringify( (argv instanceof JraphQuery) ? {query: argv.query} : {mutation: argv.mutation} );
    let fetch_options : Object = {
        headers,
        body: body,
        ...argv.options
    };
    // return (await fetch(url, fetch_options).then(res=>res.json())).data;
    return fetch(url, fetch_options).then(res=>res.json());
}

export default jraph;
export { jraph, JraphOptions, JraphQuery, JraphMutation }