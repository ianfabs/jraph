const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const expect = chai.expect;
let {jraph} = require('../dist/index');

describe('jraph query', async () => {
  let jql = jraph("https://l7yjxlm3ym.sse.codesandbox.io/", {
    method: "POST"
  });
  console.log(jql);
  let results = await jql`
      query{
        getResources{
            title
        }
      }
    `;

  let testPromise = new Promise(function (resolve, reject) {
    resolve(results);
  });

  it('should be ok', ()=>{
    return testPromise.then(function (result) {
      expect(result).to.be.ok;
    })
  });

  it('should return a json object with property `data`', () => {
    return testPromise.then(function (result) {
      console.log(result);
      expect(result).to.have.property("data")
    })
  });

});