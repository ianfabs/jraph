# jraph
## A simple fetch-wrapper for making GraphQL API calls in a jiff!

[![NPM](https://nodei.co/npm/jraph.png?mini=true)](https://nodei.co/npm/jraph/)

jraph is written in typescript, but can be used in both a VanillaJS and a TypeScript context.

<small>
    | &nbsp; Note that for the purposes of this project, we will use sample data from an ApolloGraphQL API I created on CodeSandbox, check it out by clicking the button below.
</small>

[![Edit GraphQL Example API](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/xpwq1o2824?autoresize=1&hidenavigation=1)

### Options

Jraph takes an object as it's parameters, and it accepts three options:

 - #### URL
   - URL takes a URL string as it's parameter, this should be the URL to your graph-ql endpoint
 - #### Options
   - Kind of ironically, jraph's own options accept an `options` parameter, which should be an object.
   - These options are for supplying fetch-options such as `headers` or `method`.
   - An important note, jraph will always override the `"Content-Type"` header parameter so that your request is made appropriately.
   - And if you don't specify a `method`, fetch will default to `GET`, jraph will default to `POST` unless you specify otherwise.
 - #### Query
   - The last, and honestly most important option, `query`. This parameter is required to make any requests with jraph.
   - You should use a `template literal` (AKA the \`\` syntax), if available to you. And this string should contain a typical query: either `query{}` or `mutation{}`
   - Warning though, unlike apollo client, jraph does not implement any kind of error checking for you, and I have yet to implement a catch any Plain-Text responses.

### VanillaJS Examples

#### Queries
```js
    import {jraph} from 'jraph';

    async function getItems(){
        return jraph({
            url: "https://csb-xpwq1o2824-xravvsjkul.now.sh/",
            options: {
                method: "POST"
            },
            query: `
            query{
                items{
                    title
                    info
                }
            }
            `
        });
    }
```

#### Mutations
```js
    import {jraph} from 'jraph';

    async function addItems(){
        return jraph({
            url: "https://csb-xpwq1o2824-xravvsjkul.now.sh/",
            options: {
                method: "POST"
            },
            query: `
            mutation{
                addItem(id: 1, title: "jraph", info: "A Minimal fetch-wrapper for making GraphQL queries!"){
                    title
                    info
                }
            }
            `
        });
    }
```

### TypeScript Examples

#### Queries
```js
    import {jraph, JraphOptions} from 'jraph';

    async function getItems(): string[]{
        return (await jraph({
            url: "https://csb-xpwq1o2824-xravvsjkul.now.sh/",
            options: {
                method: "POST"
            },
            query: `
                {
                    items{
                        title
                        info
                    }
                }
            `
        } as JraphOptions)).data.items;
    }
```