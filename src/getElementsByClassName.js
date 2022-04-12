// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var element = arguments[1] || document.body;
  var result = [];
  if (_.contains(element.classList, className)) {
    result.push(element);
  }
  if (element.childElementCount > 0) {
    _.forEach(element.childNodes, function(currentChild) {
      result = result.concat(getElementsByClassName(className, currentChild));
    });
  }
  return result;
};