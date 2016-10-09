function beanCounting(string){
  function countChar(string, char){
   var count = 0
    for(var i = 0; i < string.length; i++)
    if(string.charAt(i) === char)
    count++
    return count
 }
 return countChar(string, "a")
}
console.log(beanCounting("Rewrite countBs to make use of this new function."));
