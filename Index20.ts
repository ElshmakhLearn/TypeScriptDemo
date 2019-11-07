var handler={
    get:function(target,prop){
      if(prop in target)
      return target[prop];
      else
      return "erroror";
    }
  
}


let emp=new Proxy({},handler)
emp.Id=1;
emp.Name="Ahmed";
console.log(emp.Id);
console.log(emp.Name);
console.log(emp.Salary);