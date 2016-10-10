function range(start, end, step){
 var serie = []
 if(step > 1) 
  for(var i = 0; i <= end; i+=step){ 
   serie.push(i)
  }else{ 
   for(var i = 0; i <= end; i++)  
   serie.push(i)
  } 
 return serie
}

console.log(range(1, 100, 10));
console.log(range(1, 10));
