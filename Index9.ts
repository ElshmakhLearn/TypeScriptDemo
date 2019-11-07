//Interface

// Interface
// Interface Optinal properties

interface employee{
    id:number,
    name?:string,
    salary?:number
  
}

let myfun=(obj:employee)=>{
    console.log(obj.id +"  "+obj.name+"  "+obj.salary)
}


myfun({id:1,name:"ahmed",salary:3000})




//-------------
// Interface

interface IemployeeRep{
    display(name:string):void;
    calcSalary(basic:number,bouns:number):number;  
}


class employeeRep implements IemployeeRep{

    display=(a)=>{
        alert(a);
    };

    calcSalary=(a,b)=>a+b;
}