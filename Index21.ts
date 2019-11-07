var handler={
  
    set:function(obj,prop,value){
          if(prop==="Id")
           {
               if (typeof value !=="number"){
                console.log("must Number")
               }
           }


           
           obj[prop]=value;
           return true;
    }
}


let p=new Proxy({},handler);
p.Id="aaa";
p.Name="Ahmed";

