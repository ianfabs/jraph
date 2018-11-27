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
    import {jraph, JraphQuery} from 'jraph';

    async function getItems(){
        const JraphConfig = new JraphQuery({
            url: "https://csb-xpwq1o2824-alczxhlphl.now.sh/",
            options: {
                method: "POST"
            },
            query:`{
                items{
                    title
                    info
                }
            }`
        });
        return jraph(JraphConfig);
    }
```

#### Mutations
```js
    import {jraph, JraphMutation} from 'jraph';

    async function addItems(){
        const JraphConfig = new JraphMutation({
            url: "https://csb-xpwq1o2824-alczxhlphl.now.sh/",
            options: {
                method: "POST"
            },
            mutation:`{
                addItem(title: "Eggs", info: "Cumberbatch"){
                    content
                }
            }`;
        });
        return jraph(JraphConfig);
    }
```

`typescript example coming soon`