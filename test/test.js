'use strict';

var fs = require('fs');
var assert = require('assert');
var innersource = require('../index');

function test1() {
  console.log('hello');
}

assert.equal(innersource(test1).trim(), "console.log('hello');");

var test2 = function () {
  console.log('hello');
};

assert.equal(innersource(test2).trim(), "console.log('hello');");

var test3 = function test() {
  console.log('hello');
};

assert.equal(innersource(test3).trim(), "console.log('hello');");

function   test4() {
  console.log('hello');
}

assert.equal(innersource(test4).trim(), "console.log('hello');");

function test5() {}

assert.equal(innersource(test5).trim(), "");

function test6() {
}

assert.equal(innersource(test6).trim(), "");
