
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
//arrayToList([10,20])

function listToArray (list) {

    var arr = [];
    var arr_= [];
     for(var node = list; node; node = node.rest)
        arr.push(node.value) 
    arr_= arr.filter(Boolean);
    console.log(arr_)
}

listToArray(arrayToList([10,20,30]))

