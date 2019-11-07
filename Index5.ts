// Named function
function add(x, y) {
    return x + y;
}

// Anonymous function
let myAdd = function(x, y) { return x + y; };

//----Named function with datatype--------------
function add2(x: number, y: number): number {
    return x + y;
}
// Anonymous function with datatype
let myAdd2 = function(x: number, y: number): number {
     return x + y; 
};

//Default parameter
function display(x:number=1,y:number=1)
{ 
  console.log(x+y);
}
//call function
display();

//-----------------
// Dynamic many parameter
function myfun(...a)
{
    let sum=0;
    for(let i=0;i<a.length;i++)
    {
      sum=sum+a[i];
    }
    console.log(sum);
}



//call 
myfun(3,4,5,5,5,3);


//---------------------
//  Arrow Function
let myfun1=(a:number,b:number)=>{
        console.log(a+b);
    };
    
    //call function
     myfun1(1,2);