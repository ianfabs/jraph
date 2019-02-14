# jraph
## A simple fetch-wrapper for making GraphQL API calls in a jiff!

Designed to feel similar to using apollo's graphql-tag function.


[![version](https://badgen.net/npm/v/jraph)](https://badgen.net/npm/v/jraph) 
[![bundlephobia](https://badgen.net/bundlephobia/minzip/jraph)](https://bundlephobia.com/result?p=jraph@1.4.0) 
[![total downloads](https://badgen.net/npm/dt/jraph)](https://badgen.net/npm/dt/jraph) 

[![Build Status](https://travis-ci.org/ianfabs/jraph.svg?branch=master)](https://travis-ci.org/ianfabs/jraph)
[![last commit](https://badgen.net/github/last-commit/ianfabs/jraph)](https://badgen.net/github/last-commit/ianfabs/jraph) 
[![license](https://badgen.net/github/license/ianfabs/jraph)](https://badgen.net/github/license/ianfabs/jraph) 

[![graphql](https://badgen.net/badge//graphql?icon=graphql)](https://badgen.net/badge//graphql?icon=graphql) 

[![NPM](https://nodei.co/npm/jraph.png?mini=true)](https://nodei.co/npm/jraph/) 

### Options

Jraph takes two parameters

 - #### URL
   - a URL string, this should be the URL to your graph-ql endpoint
 - #### Options
   - Basically just fetch params
   - Only works with post-requests right now please bear with me.

#### Basic Example
```js
    import {jraph} from 'jraph';
    const gql = jraph("https://csb-xpwq1o2824-xravvsjkul.now.sh/");

    async function getItems(){
        return gql`{
           items{
              title
              info
           }
        }
        `
    }
```
