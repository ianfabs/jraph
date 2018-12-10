const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const expect = chai.expect;

let {jraph} = require('../dist/index');

describe('reusing the jql function', () => {
  const jql = jraph(
      "https://csb-xpwq1o2824-xravvsjkul.now.sh/",
      {
          method: "POST"
      }
  );
  const item = {
      title: "Toast",
      info: "butter"
  }
  let results1 = (
      jql`
      query{
          items{
              title
          }
      }
      `
  );
  let results2 = (
    jql`
    query{
        items{
            info
        }
    }
    `
);
  //===============================================================
  let testPromise1 = new Promise(function (resolve, reject) {
      resolve(results1);
  });
  let testPromise2 = new Promise(function (resolve, reject) {
    resolve(results2);
  });
  //===============================================================
  it('should be okay', ()=>{
    return Promise.all([testPromise1, testPromise2]).then(res=>{
      expect(res).to.be.ok;
    })
  })

  it('should return a json object with property `data`', () => {
    return Promise.all([testPromise1, testPromise2]).then(res=>{
      expect(res[0]).to.have.property("data");
      console.log(res[0]);
      expect(res[1]).to.have.property("data");
      console.log(res[1]);
    })
  })

});