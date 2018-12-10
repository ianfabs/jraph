const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const expect = chai.expect;

let {jraph} = require('../dist/index');

describe('jraph mutation', () => {
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
  //===============================================================
  let testPromise = new Promise(function (resolve, reject) {
      resolve(results);
  });
  
  it('should be okay', ()=>{
    return testPromise.then(function (result) {
      expect(result).to.be.ok;
    })
  })

  it('should return a json object with property `data`', () => {
    return testPromise.then(function (result) {
      console.log(result);
      expect(result).to.have.property("data");
    })
  })

});