export class employee{
    Id:number;
    Name:string;
    salary:number;
    work(){
        alert("working");
    }

    resign(){
        alert("Resign");
    }
}


export class manager extends employee
{
    bouns:number;
    hire(){
        alert("hire");
    }
}