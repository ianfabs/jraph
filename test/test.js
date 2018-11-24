const chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.should();
let {jraph} = require('../dist/index');

describe('jraph()', () => {
    it('should execute with no errors', async (done) => {
        let call = await jraph({
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
        call.should.eventually.be.ok.notify(done);
    })
});