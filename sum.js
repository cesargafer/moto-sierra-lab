function sum(array){
 var sum = 0;
 for(var i = 0; i <= array.length; i++)
  sum += Number(i);
 return sum;
}
console.log(sum([1,2]))
