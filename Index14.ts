//Access Modifier  private , protected ,Public
//constructor
class Human{
    //private x:number;
   // private y:number;
   // private z:number;
    constructor(private x:number,private y:number,private z:number){

    }
    display(){
        alert(this.x +"   "+this.y);
    }
    Id:Number;
    Name:string;
    eat(){
       alert("eating");
    }
    Drink(){
        alert("drinking");
     }

}


class employee extends Human  {

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


let h=new Human(1,2,4);
