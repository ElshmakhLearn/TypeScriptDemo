//Inheritance

class Human{
    Id:Number;
    Name:string;
    constructor(Id,Name)
    {

    }
    eat(){
       alert("eating");
    }
    Drink(){
        alert("drinking");
     }
}

class employee extends Human{

    constructor()
    {
        super(1,"aaaa");
    }
    salary:number;
    work(){
        alert("working");
    }

    resign(){
        alert("Resign");
    }
}


class manager extends employee
{
    bouns:number;
    hire(){
        alert("hire");
    }
}



let e1=new employee();
