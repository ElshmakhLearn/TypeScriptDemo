//Generators

function *addOne()
{
    yield 1;
    yield 2;
    yield 3;
    yield 4;
   
}




let y=addOne();
console.log(y.next()); //{done: false, value: 1}
console.log(y.next()); //{done: false, value: 2}

let z=addOne();
console.log(z.next()); //{done: false, value: 1}
