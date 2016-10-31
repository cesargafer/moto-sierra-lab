
function arrayToList(arr) {
    arr.reverse();
    var list = {
        rest: null
    };
    arr.forEach(function(element){
     list = {
        value: element, 
        rest: list
      };
    })
    //console.log(list);
    return list
};
//console.log(arrayToList([10,20,30]));


function nth(list, pos){
 var position = 0;
 for (var node = list; node; node = node.rest) {
  if(position == pos) 
   return node.value;
  position++;
 }
}
console.log(nth(arrayToList([10,20,30]), 5));


