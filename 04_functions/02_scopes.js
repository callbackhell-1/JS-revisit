let a = 10;
const b = 20;
var c = 30;

// console.log(a); //10
// console.log(b);//20
// console.log(c);//30

/*
{
    
}
--> curly braces is known as scope
 */

// Global & Local Scope

let x = 500;
var y = 600;
{
  let x = 3;
  var y = 9;

  console.log(x); //3
  console.log(y); //9
}

console.log(x); //500
console.log(y); //9

/************************/
function one() {
  const username = "John";

  function two() {
    const website = "youtube";
    console.log(username); //John
  }
  console.log(website); //ReferenceError: website is not defined

  two();
}

one();

/**
 * CLOSURE -> child function is able to access parent function variables.
 */

/*************function expression */

function add(num1, num2) {
  return num1 + num2;
}

console.log(add(5, 6)); //11

//this is func expression
const mul = function (num1, num2) {
  return num1 * num2;
};

console.log(mul(5, 6)); //30

/**hoisting */
console.log(add(5, 6)); //11 (no error in this case)

function add(num1, num2) {
  return num1 + num2;
}

console.log(mul1(5, 6)); // error : Cannot access 'mul1' before initialization (no hoisting in this case)

const mul1 = function (num1, num2) {
  return num1 * num2;
};
