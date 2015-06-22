'use strict';

var url = require('url');


var Families = require('./FamiliesService');


module.exports.familyGet = function familyGet (req, res, next) {
  var familyname = req.swagger.params['familyname'].value;
  var generation = req.swagger.params['generation'].value;
  

  var result = Families.familyGet(familyname, generation);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};
