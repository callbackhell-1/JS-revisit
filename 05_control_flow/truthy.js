/**
 * if-else
 * if-else if
 * comparission operation
 * && , ||
 * switch
 */

//falsy value :
// false,  0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values :
// "0", 'false', " ", [], {}, function(){}

const userEmail = [];

if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Don't have user email");
}
//Got user email

//check array & object is empty or not
//arr.length

//for object
let emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}
//Object is empty
//Explanation:
//Object.keys(emptyObj) retruns an array and then we apply length prop. on it.

// Nullish Coalescing Operator (??): null & undefined
let val1;
val1 = 10 ?? 5;
console.log(val1); //10

let val2;
val2 = null ?? 5;
console.log(val2); //5

let val3;
val3 = undefined ?? 5;
console.log(val3); //5

let val4;
val4 = false ?? 5;
console.log(val4); //false

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
