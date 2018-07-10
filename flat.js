'use strict'
let arrays = [[1, 2, 3], [4, 5], [6]];
function flatenizer(arr){
 let flattened_array  = arr.reduce(function(index_one, index_two){
  return index_one.concat(index_two); 
 })
 return flattened_array;
}
console.log(flatenizer(arrays))


