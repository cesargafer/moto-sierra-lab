
function Vector(x, y){
 this.x = x,
 this.y = y;
}

Vector.prototype.plus = function(obj){
 this.x += obj.x,
 this.y += obj.y;
 return this;
}

console.log(new Vector(10, 2).plus(new Vector(2, 3)));

Object.defineProperty(Vector.prototype, "length", {
  get: function() {
  var pwX = Math.pow(this.x, 2);
  var pwY = Math.pow(this.y, 2);
  var result = Math.sqrt(pwX + pwY);
  return result;
 }
});


console.log(new Vector(1, 1).length);
