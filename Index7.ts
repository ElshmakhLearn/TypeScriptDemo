// map
let items=new Map();
items.set("item1",111)
items.set("item2",222)
items.set("item3",333)

//---get entries-----
items.get("item2");  //222


//--has  return bool----
items.has("item3");  //true
items.has("item66");  //false

//-------size----
items.size   //3

//- --- delete----
items.delete("item2")


//-------clear---
items.clear();



//----------get keys-------
for (let key of items.keys()) {
    console.log(key);               
}

//---------get values------
for (let val of items.values()) {
    console.log(val);               
}

//-------get entries----------
for (let entry of items.entries()) {
    console.log(entry[0]+" "+ entry[1]);    
}
//--------------------------------
for (let [key, value] of items) {
    console.log(key+"  "+ value);           
}