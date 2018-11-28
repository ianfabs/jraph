const chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const expect = chai.expect;
//const assert = require('assert');
let {jraph} = require('../dist/index');

describe('jraph() with basic query', () => {
    it('should return a json object with property `data`', () => {
        let call = jraph({
            url: 'https://csb-xpwq1o2824-xravvsjkul.now.sh/',
            query: `
            {
                items{
                    title
                    info
                }
            }`
        });

        let testPromise = new Promise( function(resolve, reject){
            resolve(call);
        } );
        return testPromise.then(function(result){
            expect(result).to.have.property("data");
        })
    })
});


describe('jraph() with basic mutation', () => {
    it('should return a json object with property `data`', () => {
        let call = jraph({
            url: 'https://csb-xpwq1o2824-xravvsjkul.now.sh/',
            query: `
            mutation{
                addItem(id: 5, title: "Ham", info: "Samich"){
                    id
                    title
                    info
                }
            }`
        });

        let testPromise = new Promise( function(resolve, reject){
            resolve(call);
        } );
        return testPromise.then(function(result){
            expect(result).to.have.property("data");
        })
    })
});

describe('jraph() without url', () => {
    it('should throw an error', () => {
        let call = jraph({
            //url: 'https://csb-xpwq1o2824-xravvsjkul.now.sh/',
            query: `
            mutation{
                addItem(id: 5, title: "Ham", info: "Samich"){
                    id
                    title
                    info
                }
            }`
        });

        let testPromise = new Promise( function(resolve, reject){
            expect(resolve(call)).to.throw(TypeError, 'The "url" argument must be of type string. Received type undefined');
            //;
        } );
        return testPromise.then(function(result){
            return result;
        }).catch(function(err, res){
            if(err){
                //This is just for style, because I'm a dirty pleb
                console.group("");
                console.group("");
                console.group(err.message);
                console.groupEnd();
                console.groupEnd();
                console.groupEnd();
            };
        });
    })
});