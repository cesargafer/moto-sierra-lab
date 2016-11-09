
var ancestry = require('./ancestry.js');
var ancestryObj = JSON.parse(ancestry);

function hasKnownMother(arr, transform){
 var mappedPerson = []; 
 for(var i = 0; i < arr.length; i++){
  mappedPerson.push(transform(arr[i]));
 }
 return mapped;
}

console.log(hasKnownMother(ancestryObj));

var withMother = ancestryObj.filter(function(person){
 return person.mother
});

console.log(hasKnownMother(withMother, function(person){
 return person.name
}));



function filter(array, test) {
  var passed = [];
  for (var i = 0; i < array.length; i++) {
    if (test(array[i]))
      passed.push(array[i]);
  }
  return passed;
}


function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}
function age(p) { return p.died - p.born; }

console.log(average(ancestryObj.filter(male).map(age)));
// → 61.67
console.log(average(ancestryObj.filter(female).map(age)));
// → 54.56


