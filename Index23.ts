
 async function getdata()
{
   var res= await fetch("http://arabprogrammersday.com/api/course/getall");

      
   var data=await res.json();
    console.log(data);
}


getdata();