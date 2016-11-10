
var ancestry = require('./ancestry.js');
var ancestryObj = JSON.parse(ancestry);

function hasKnownMother(arr){
 var mappedPerson = []; 
 for(var i = 0; i < arr.length; i++){
 if(arr[i].mother != null)
  mappedPerson.push(arr[i]);
 }
 return mappedPerson; // 34
}

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

function mapAgesDif(arr){
 var mapPersons = [];
 var mapAges = [];
 arr.map(function(person){
  var childBorn = person.born; 
  var mother = person.mother
  mapPersons.push(person) 
   for(i = 0; i < mapAges.length; i++)
    if(mother = person.name[i])
     var dif = childBorn - person.born; 
    mapAges.push(dif);
 }) 
 return mapAges
}
console.log(mapAgesDif(hasKnownMother(ancestryObj)))
