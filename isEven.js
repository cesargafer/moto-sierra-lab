function isEven(number){
 if(number % 2 === 0)
  return true
 else if(number % 2 > 0)
  return false
 else
  return isEven(number - 2)
}
console.log(isEven(50))
console.log(isEven(-10))
console.log(isEven(-1))	
