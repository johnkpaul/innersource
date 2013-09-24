'use strict';

var toString = Function.prototype.toString;

module.exports = function (fn) {
  if (typeof fn !== 'function') return;
  var s = toString.call(fn);
  return s.slice(s.indexOf('{') + 1, s.lastIndexOf('}'));
};
