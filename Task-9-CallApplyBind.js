// From first video -> All Answer
var obj = {num:2}

var addToThis = function(a, b, c){
    return this.num+a+b+c;
}

console.log(addToThis.call(obj, 1, 2, 3))
// 1) call function

var arr = [1,2,3]
console.log(addToThis.apply(obj, arr))
// 2) program using apply

var arr = [1,2,3]
var bound = addToThis.bind(obj)
console.log(bound(1,2,3))
// 3) program using bind

var student={age:20}
function print(){
  return this.age
}
var bound=print.bind(student)
console.log(bound())
// 4)
