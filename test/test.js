const chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const expect = chai.expect;
let {jraph, JraphQuery} = require('../dist/index');

describe('jraph()', () => {
    it('should return a json object with property `data`', () => {
        let options = new JraphQuery({
            url: 'https://csb-8kj415zvx9-yaccgwjitv.now.sh/',
            options: {
                method: "POST"
            },
            query: `{
                posts{
                    content
                }
            }`
        });

        let testPromise = new Promise( function(resolve, reject){
            resolve(jraph(options));
        } );
        return testPromise.then(function(result){
            expect(result).to.have.property("data");
        })
    })
});