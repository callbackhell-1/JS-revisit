const arr = ["Batman", 1, 5, true, false];

console.log(arr[3]); //true

const arr2 = new Array(1, 5, "superman");
console.log(arr2[2]); //superman

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

/*****slice***** */

/**
 * The original array will not be modified.
 * returns a  portion of an array into a new array object.
 * selected from start to end (end not included)
 *  where start and end represent the index of items in that array.
 * The original array will not be modified.
 */

const animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals.slice(2));
//  Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
//  Array ["camel", "duck"]

console.log(animals.slice(1, 5));
//  Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
//  Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
//  Array ["camel", "duck"]

console.log(animals.slice());
//  Array ["ant", "bison", "camel", "duck", "elephant"]

/****splice */

/**
 *  splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements
 * change original array
 */

/**
 * SYNTAX :
 * splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2)
splice(start, deleteCount, item1, item2, ...)
 */

const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, "May");
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]

//NOTE: slice doesn't change original array, splice does.
