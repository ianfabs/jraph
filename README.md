# jraph
## A simple fetch-wrapper for making GraphQL API calls in a jiff!

jraph is written in typescript, but can be used in both a VanillaJS and a TypeScript context.

<small>
    | &nbsp; Note that for the purposes of this project, we will use sample data from an ApolloGraphQL API I created on CodeSandbox, check it out by clicking the button below.
</small>

[![Edit GraphQL Example API](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/xpwq1o2824?autoresize=1&hidenavigation=1)

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

`typescript example coming soon`