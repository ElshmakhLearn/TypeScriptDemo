
//class Constructor

class employee{

    Id:number;
    Name:string;
    Salary:number;
  
    constructor(Id:number,Name:string,Salary?:number)
    {
       this.Id=Id;
       this.Name=Name;
       this.Salary=Salary;
    }
}

let emp=new employee(1,"Ahmed");
console.log(emp.Salary);