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
    console.log(list);
};
arrayToList([10,20])

