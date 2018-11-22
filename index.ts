interface JraphOptions{
    url: string;
    options: any;
    query: string;
    mutation: string;
}

async function jraph(argv: JraphOptions){
    let url = argv.url;
    let headers = { 'Content-Type': 'application/json' }
    let body = JSON.stringify({
      query: argv.query,
      mutation: argv.mutation,
      //...argv.options.body
    });
    let fetch_options = {
        headers,
        body: body,
        ...argv.options
    };
    //returns request as JSON
    // return (await fetch(url, fetch_options).then(res=>res.json())).data;
    return fetch(url, fetch_options).then(res=>res.json());
}

export default jraph;
export { JraphOptions }