/**
 * Based on how data stored in memory and accessed it from access it from memory, we have two DT:
 * 1. Primitive : String,Number,Boolean,null,undefined,Symbol,BigInt.

 


 * 2. Non-primitive (reference type) : Array,objects, functions

--> JS is static type or dynamic types?
Dynamically-typed languages are those (like JavaScript) where the interpreter assigns variables a type at runtime based on the variable's value at the time


 */

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id == anotherId); //false -> Symbol is used for uniqueness, despitehaving sampe value inside Symbol , but still when we are comparing it's not same

const bigNumber = 155448448945489484n;
console.log(bigNumber); //155448448945489484n

//Array,objects,FUnctions

const heroes = ["thor", "ironman", "batman", "sperman"];

let myObj = {
  name: "John",
  age: 15,
};

const myFunctions = function () {
  console.log("Hello from function");
};

myFunctions(); //Hello from function

console.log(typeof myObj); //object
console.log(typeof myFunctions); //function object


/**
 * Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
 */