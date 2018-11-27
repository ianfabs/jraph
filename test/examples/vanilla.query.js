const chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const expect = chai.expect;
let {jraph, JraphQuery} = require('../../dist/index');

describe('JraphQuery', () => {
    it('should return a json object with property `data`, without errors', () => {
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

        let testPromise = new Promise( function(resolve, reject){
            resolve(getItems());
        } );
        return testPromise.then(function(result){
            console.dir(result, {depth: 10});
            expect(result).to.have.property("data");
        })
    })
});