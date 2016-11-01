function deepEqual(obj, another){
 if(obj === another)
  return true
 else 
  return false
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));

