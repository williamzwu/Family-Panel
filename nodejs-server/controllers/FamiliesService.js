'use strict';

exports.familyGet = function(familyname, generation) {

  var examples = {};
  
  examples['application/json'] = [ {
  "residence" : "aeiou",
  "family_name" : "aeiou"
} ];
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
