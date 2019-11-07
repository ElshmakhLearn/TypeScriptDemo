
//promise   callback funtion 

let myfun=new Promise(function(resolve,reject){

let x=true;
if(x)
{
    resolve({Id:1,Name:"Ahmed"});
}
else
{
    reject("erooooorrrrrrrr");
}
});



myfun.then(function(res){
    console.log(res)
}).catch(function(ex){
 console.log(ex);
});


