'use strict';

exports.carbrandsGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = [ {
  "code" : "aeiou",
  "id" : 123456789,
  "title" : "aeiou"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}
