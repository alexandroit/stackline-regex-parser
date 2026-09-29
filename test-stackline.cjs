var assert = require('assert');
var parse = require('./lib');
function baseline(input) {
  var m = input.match(/(\/?)(.+)\1([a-z]*)/i);
  if (!m) throw new Error('Invalid regular expression format.');
  var flags = Array.from(new Set(m[3])).filter(function (x) { return 'gimsuy'.includes(x); }).join('');
  return new RegExp(m[2], flags);
}
function result(fn, input) {
  try { var regex = fn(input); return [regex.source, regex.flags]; }
  catch (error) { return [error.name]; }
}
var inputs = ['', '/', '//', '///', '/hello/i', '/a/ggunknown', 'hello', '\n/a/i', '/\na/', 'a\nb'];
var chars = 'ab/ig?*[]\r\n';
var seed = 19;
for (var i = 0; i < 5000; i++) {
  var input = '';
  for (var j = 0; j < 12; j++) { seed = (seed * 16807) % 2147483647; input += chars.charAt(seed % chars.length); }
  inputs.push(input);
}
inputs.forEach(function (input) { assert.deepEqual(result(parse,input),result(baseline,input),JSON.stringify(input)); });
assert.equal(parse(new Array(100001).join('a')).source.length,100000);
console.log('5011 compatibility and large-input checks passed');
