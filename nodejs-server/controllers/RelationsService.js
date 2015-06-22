'use strict';

exports.relationsAncestorsGet = function(person, generation, bloodrelative) {

  var examples = {};
  
  examples['application/json'] = [ {
  "image" : "aeiou",
  "sex" : "aeiou",
  "familyname" : "aeiou",
  "given_name" : "aeiou"
} ];
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.relationsDescendantsGet = function(person, generation, bloodrelative) {

  var examples = {};
  
  examples['application/json'] = [ {
  "image" : "aeiou",
  "sex" : "aeiou",
  "familyname" : "aeiou",
  "given_name" : "aeiou"
} ];
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
