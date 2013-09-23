'use strict';
var regex = /function\s{0,}\w*\(\)\s{0,}\{([\s\S]*)\}/;

module.exports = function innersource(func){
  return func.toString().match(regex)[1];
};
