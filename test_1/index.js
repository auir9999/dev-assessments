"use strict";

const path = require("path");
const fs = require('fs');

/**
 * The `test_data.json` contains an object array of "The Simpsons" characters and their catchphrase. This function
 * will add a new property `example` to each object that is a combining the `first_name`, `last_name`, and
 * `catchphrase` properties into a new sentence.
 *
 * The new sentence should read like "Homer Simpson says Doh!".  See the `expected_output.json` file for the
 * expected results of this.
 *
 * @returns  {Object[]}
 */
module.exports = function test1() {
  //iteration 5 using readFileSync, reading from file and turning it into json
  let testData = fs.readFileSync(path.resolve(__dirname,'./test_data.json'),'utf8');
  let results = JSON.parse(testData);
  //using for each of result, to add in the additional line of sentence
  for (let i in results){
    results[i].example=results[i].first_name+" "+results[i].last_name+" says "+results[i].catchphrase;
  }
  //returning results
  return results;
};
