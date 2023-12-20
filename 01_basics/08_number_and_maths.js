const score = 100;
const balance = new Number(1000);

console.log(score); //100
console.log(balance); //[Number: 1000]

const newBalancedConverted = balance.toString();
const checkLength = newBalancedConverted.length;
console.log(typeof newBalancedConverted); //string
console.log(checkLength); //4

//Read toFixed(),toPrecision() [returns string],toLocaleString()

console.log(balance.toFixed(2)); //1000.00

//toLocaleString()

const money = 100000000;
console.log(money.toLocaleString("en-in")); //10,00,00,000

// Number.MAX_VALUE
// Number.<ctrl+space>

//********************************Math***********************

console.log(Math); //Object [Math] {}
console.log(Math.abs(-5)); //5 (change neg to +ve , +ve remains +ve only)
console.log(Math.round(4.8)); //5
console.log(Math.round(4.4)); //4
console.log(Math.ceil(4.2)); //5
console.log(Math.ceil(4.5)); //5
console.log(Math.floor(4.9)); //4
console.log(Math.min(4, 8, 7, 9)); //4
console.log(Math.max(4, 8, 7, 9)); //9

// Math.random() --> returns value from 0-1

console.log(Math.random());
console.log(Math.round(Math.random() * 10) + 1);

//To get withing certain range
const min = 10;
const max = 15;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
