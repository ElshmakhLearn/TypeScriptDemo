//---boolean-------
let x: boolean = false;
console.log("x= "+x);

//-----number------
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

//------string-----------
let fname: string = "Mohamed";
let sname:string = 'Elshmakh';


//----array---------------
let nums1: number[] = [10, 20, 30];
let nums2: Array<number> = [10, 20, 30];


//----tuple --------------------
let tpl: [string, number[]];
tpl = ["hello", nums1]; // OK
//tpl = [10, "hello"]; // Error
console.log(tpl[0])
console.log(tpl[1])


//-------enum------------------
enum Color {Red=5, Green=44, Blue}
let d=Color.Blue;
console.log(d);

//-------Any------------------
let a:any=33;
a="ahmed";
a=true;
console.log(a);

//------void--------
let v:void;  // assign null or undefined 
v=undefined;

//------function return void----------
function warnUser(): void {
    console.log("This is my warning message");
}
//-----undefined=null--------
let u: undefined = undefined;
let n: null = null;
let u2: undefined = null;

//--------never-------------
// never reach to end
//A function that has a never return type never returns.
// It doesn't return undefined, either.
// The function doesn't have a normal completion, 
//which means it throws an error or never finishes running at all.
//--------never-------------
function dosomething(): never {
    while (true) {
    }
}


function failwith1(message: string): never {
    throw new Error(message);
  }

  failwith1("ddddddddd");


  //----------object----------------
  var emp={Id:1,Name:"Ahmed",Salary:3000};

  //---------note-------------
  let c:number|string|number[];
  c=22;
  c="aaa";
  c=[2,4];
  //c=true;
