const chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const expect = chai.expect;
let {
  jraph,
  JraphOptions
} = require('../dist/index');

describe('jraph()', () => {
  it('should return a json object with property `data`', () => {
    //===============================================================

    let jql = jraph({
      uri: "https://csb-xpwq1o2824-alczxhlphl.now.sh/",
      options: {method: "POST"}
    });
    let results = 
    jql`
      query{
        items{
          title
        }
      }
    `;

    //================================================================
    let testPromise = new Promise(function (resolve, reject) {
      resolve(results);
    });
    return testPromise.then(function (result) {
      console.log(result);
      expect(result).to.have.property("data");
    })
  })
});