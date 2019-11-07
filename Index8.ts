let diceEntries = new Set([3,4,5]);
for (let currentNumber of diceEntries) {
 
    console.log(currentNumber);     //1 2 3 4 5 6
}
//Add Values
//diceEntries.add(1);
//diceEntries.add(2);
//diceEntries.add(3);
//diceEntries.add(3);
//diceEntries.add(3);
//diceEntries.add(4).add(5).add(6);   //Chaining of add() method is allowed
//Check value is present or not
//diceEntries.has(1);                 //true
//diceEntries.has(10);                //false
 
//Size of Set
//diceEntries.size;                   //6
 
//Delete a value from set
//diceEntries.delete(6);              // true
 
//Clear whole Set
//diceEntries.clear();                //Clear all entries

//Iterate over set entries
for (let currentNumber of diceEntries) {
 
    console.log(currentNumber);     //1 2 3 4 5 6
 
}