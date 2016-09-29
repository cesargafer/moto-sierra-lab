// print the numbers 1 - 100
// if the number is multiple of 3 -> print Fizz
// if the number is multiple of 5 -> print Buzz
// if the number is multiple if both -> print FizzBuzz
// otherwise print the number



for(var i = 1; i <= 100; i++){
 if(i % 3 === 0 && i % 5 === 0)
  console.log(i + " [√] FizzBuzz")
  else if(i % 3 === 0)
   console.log(i + " [√] Fizz")
  else (i % 5 === 0)
   console.log(i + " [√] Buzz")
}

