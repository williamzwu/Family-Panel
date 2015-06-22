'use strict';

var url = require('url');


var Relations = require('./RelationsService');


module.exports.relationsAncestorsGet = function relationsAncestorsGet (req, res, next) {
  var person = req.swagger.params['person'].value;
  var generation = req.swagger.params['generation'].value;
  var bloodrelative = req.swagger.params['bloodrelative'].value;
  

  var result = Relations.relationsAncestorsGet(person, generation, bloodrelative);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.relationsDescendantsGet = function relationsDescendantsGet (req, res, next) {
  var person = req.swagger.params['person'].value;
  var generation = req.swagger.params['generation'].value;
  var bloodrelative = req.swagger.params['bloodrelative'].value;
  

  var result = Relations.relationsDescendantsGet(person, generation, bloodrelative);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};
