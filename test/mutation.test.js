const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const expect = chai.expect;
let {
  jraph,
  JraphOptions
} = require('../dist/index');

describe('jraph mutation', () => {
  it('should return a json object with property `data`', () => {
    //===============================================================
    const jql = jraph({
        uri: "https://csb-xpwq1o2824-alczxhlphl.now.sh/",
        options: {
            method: "POST"
        }
    });
    const item = {
        title: "Toast",
        info: "butter"
    }
    let results = (
        jql`
        mutation{
            addItem(title: "${item.title}", info: "${item.info}"){
                title
                info
            }
        }
        `
    );

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