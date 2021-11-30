"use strict";
const fs = require('fs');
const path = require("path");
/**
 * The `test_data.json` contains an object array of "The Simpsons" characters and their catchphrase. This function
 * will add a new property `example` to each object that is a combining the `first_name`, `last_name`, and
 * `catchphrase` properties into a new sentence. The function should then only return the elements where
 * the last name is "Simpson".
 *
 * The new sentence should read like "Homer Simpson says Doh!".  See the `expected_output.json` file for the
 * expected results of this.
 *
 * @returns  {Object[]}
 */
module.exports = function test2() {
  //iteration 5 using readFileSync
  //the return value
  let results = [];
  //read from file & turning it into json
  let testData = fs.readFileSync(path.resolve(__dirname,'./test_data.json'),'utf8');
  let temp = JSON.parse(testData);
  //for each item, add catchphrase
  for (let i in temp){
    temp[i].example=temp[i].first_name+" "+temp[i].last_name+" says "+temp[i].catchphrase;
    //only pushes in simpsons into the return result, would rather call from a master file to read it once - but assuming that tests are separate
    if(temp[i].last_name=="Simpson"){
      results.push(temp[i]);
    }
  }
  //returning results
  return results;
};
