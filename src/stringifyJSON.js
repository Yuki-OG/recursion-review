// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;
// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else if (typeof obj !== 'object') {
    return '' + obj;
  } else if (obj === null) {
    return 'null';
  }

  if (Array.isArray(obj)) {
    var result = '[';
    for (var i = 0; i < obj.length; i++) {
      result += stringifyJSON(obj[i]) + ',';
      if (i === obj.length - 1) {
        result = result.slice(0, result.length - 1);
      }
    }
    result += ']';
  } else {
    var result = '{';
    var allKeys = Object.keys(obj);
    var counter = 0;
    for (var key in obj) {
      if (typeof obj[key] === 'function' || obj[key] === undefined) {
        continue;
      }
      result += '"' + key + '":' + stringifyJSON(obj[key]) + ',';
      if (counter === allKeys.length - 1) {
        result = result.slice(0, result.length - 1);
      }
      counter++;
    }
    result += '}';
  }
  return result;
  // your code goes here
};