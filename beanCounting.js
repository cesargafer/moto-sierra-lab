
function beanCounting(string){
 var count = 0
 for(var i = 0; i < string.length; i++)
  if(string.charAt(i) === 'B')
  count++
 return count 
}

console.log(beanCounting('BbB          bBB'))

