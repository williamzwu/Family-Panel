'use strict';

var url = require('url');


var Myself = require('./MyselfService');


module.exports.iamGet = function iamGet (req, res, next) {
  var person = req.swagger.params['person'].value;
  

  var result = Myself.iamGet(person);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};
