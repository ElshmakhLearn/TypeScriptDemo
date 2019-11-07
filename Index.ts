//------var---------
var x=1;
if(true)
{
  var  x=3;
}
console.log("x= "+x); // x=3

//------let-------------
var y=1;
if(true)
{
  let  y=3;
}

console.log("y= "+y);  // y=1

//-------const------------
//error code cannot assign z again
const z=10;
//z=3;  //error
console.log("z= "+z);