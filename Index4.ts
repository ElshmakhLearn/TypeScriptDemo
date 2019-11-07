
//Destructuring assignment
let a, b
[a, b] = [10, 20];
console.log(a); // 10
console.log(b); // 20

//------------
var x = [1, 2, 3, 4, 5];
var [y, z] = x;
console.log(y); // 1
console.log(z); // 2


//---------Array Destructuring-----------
var foo = ['one', 'two', 'three'];
var [red, yellow, green] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // "three"


//---------------------
//Two variables values can be swapped in one destructuring expression.
var a1 = 1;
var b1 = 3;
[a1, b1] = [b1, a1];
console.log(a1); // 3
console.log(b1); // 1