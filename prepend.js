//   (ღ˘⌣˘ღ)
function prepend(element, listArg){
 var list = {
  value: element,
  rest: listArg
 };
 return list
}
console.log(prepend(10, prepend(20, null)));





