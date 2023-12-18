//------------1-----------------
/*let score = "20";
console.log(typeof score); //string

let valueOfNumber = Number(score);
console.log(typeof valueOfNumber); //number
console.log(typeof score); //string
*/

// ----------2---------
/*
let place = "mum123";
console.log(typeof score); //string

let newData = Number(place);
console.log(typeof newData); //number
console.log(newData); //NaN
*/

//-----------3---------
/*
let place = null;
console.log(typeof score); //undefined

let newData = Number(place);
console.log(typeof newData); //number
console.log(newData); //0
*/
//-------4-------
/*
let place = undefined;
console.log(typeof place); //undefined

let newData = Number(place);
console.log(typeof newData); //number
console.log(newData); //NaN
*/

//******************* Operations ********* */

let value = 5;
let negValue = -value;
//console.log(negValue); //-5

let str1 = "John";
let str2 = " doe";
//console.log(str1 + str2);

// read coercion from docs
console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log("1" + "2"); //12
console.log("1" + 2 + 2); //122

let num1, num2, num3;
num1 = num2 = num3 = 10;

let gameCounter=100;
gameCounter++;
// ++gameCounter;
console.log(gameCounter); //101

// read  : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment