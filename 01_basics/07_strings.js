/*
const name = "John";
const age = 15;

console.log(name + age + " Hello"); //John15 Hello

console.log(`Hi my name is ${name} & my age is ${age}`); //Hi my name is John & my age is 15 (string interpolation)

const gameName = new String("Contra");
console.log(gameName); //[String: 'Contra']

console.log(gameName[0]); //C
console.log(gameName[5]); //a

console.log(gameName.__proto__); //{} (oject)

let gameNameInUpperCase = gameName.toUpperCase();
console.log(gameNameInUpperCase); //CONTRA
console.log(gameName.length); //6
console.log(gameName.charAt(3)); //t
console.log(gameName.indexOf("t")); //3

*/

//*****************Substring************* */
let name = "John Doe";
const newName = name.substring(2, 4);
const newName2 = name.substring(2, 6); //--> start from 2 and last one will not consider , it means (2 to 5)
console.log(newName); //hn
console.log(newName2); //hn D

//*************slice****************** */
let countryName = "South Africa country";
const newCountryName = countryName.slice(2, 6); ////--> start from 2 and last one will not consider , it means (2 to 5)
console.log(newCountryName); //uth

//****************Trim********** */
// --> remove witespace from start and end
let formInput = "         Hello     ";
const trimmedValue = formInput.trim();
console.log(formInput); //         Hello
console.log(trimmedValue); //Hello

// *************replace**********
// -->replace method in JavaScript only replaces the first occurrence of the specified substring by default.
// const newUrl = url.replace(/%20/g, "-");
// Now, every %20 in the string will be replaced with "-"

let url = "www.google.com/q=how%20to%20code";
const newUrl = url.replace("%", "-");
console.log(url);
console.log(newUrl);

// *************includes**********
console.log(url.includes("c")); //true


/**
 * To Do : go through String different methods from mdn
 */
