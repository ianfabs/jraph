const chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const expect = chai.expect;
let {jraph, JraphMutation} = require('../../dist/index');

describe('JraphMutation', () => {
    it('should return a json object with property `data`, without errors', () => {
        async function addItem(){
            const JraphConfig = new JraphMutation({
                url: "https://csb-xpwq1o2824-alczxhlphl.now.sh/",
                options: {
                    method: "POST"
                },
                mutation:`{
                    addItem(title: "sample", info: "test item"){
                        title
                        info
                    }
                }`
            });
            return jraph(JraphConfig);
        }

        let testPromise = new Promise( function(resolve, reject){
            resolve(addItem());
        } );
        return testPromise.then(function(result){
            console.dir(result, {depth: 10});
            expect(result).to.have.property("data");
        })
    })
});