//Access Modifier  private , protected ,Public

class Human{
    private x:number;
    protected y:number;
    public z:number;
    Id:Number;
    Name:string;
    eat(){

         this.x=33;
       alert("eating");
    }
    Drink(){

        alert("drinking");
     }

}

class employee extends Human{

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


let h=new Human();
