//Iterators
let arr=[2,4,6,7];

for(let x=0 ;x<arr.length;x++)
{
   console.log(arr[x]);
}


for(let x of arr)
{
   console.log(x);
}


//let it=arr[Symbol.iterator]();

//let count=0;
//while(count<arr.length)
//{
 //   console.log(it.next().value);
  //  count++;
//}

