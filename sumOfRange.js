function range(start, end){
 var serie = []
 for(var i = 1; i <= end; i++)
 serie.push(i)
 return serie
}

function sum(array){
 var sum = 0;
 for(var i = 0; i <= array.length; i++)
  sum += Number(i);
 return sum;
}
console.log(sum(range(1, 10)));
