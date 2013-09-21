'use strict';
var regex = /function\s{0,}\w*\(\)\s{0,}\{([\s\S]*)\}/;

exports = module.exports = function innersource(func){
  return func.toString().match(regex)[1];
};
