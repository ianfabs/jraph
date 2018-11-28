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
        const jql = jraph({
            url: "https://csb-xpwq1o2824-alczxhlphl.now.sh/",
            options: {
                method: "POST"
            }
        });
        return (
            jql`
            query{
                items{
                    title
                    info
                }
            }`
        );
    }

    async function showStuff(){
        console.log(await getItems())
    }
```

#### Mutations
```js
    import {jraph} from 'jraph';

    async function addItem(){
        const jql = jraph({
            url: "https://csb-xpwq1o2824-alczxhlphl.now.sh/",
            options: {
                method: "POST"
            }
        });
        return (
            jql`
            mutation{
                addItem(title: "egg", info: "salad"){
                    title
                    info
                }
            }`
        );
    }

    async function showStuff(){
        console.log(await addItem())
    }
```

`typescript example coming soon`