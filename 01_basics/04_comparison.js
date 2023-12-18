console.log("2" > 1); //true
console.log(5 > "6"); //false

console.log(null > 2); //false
console.log(null < 1); //true

console.log(undefined == 0); //f
console.log(undefined == null); //true
console.log(undefined > 1); //false

//Read ECMA official docs : https://262.ecma-international.org/10.0/#sec-abstract-equality-comparison

//strict check

console.log("2" === 2); //false ( check DT and value as well)
