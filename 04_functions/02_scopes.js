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
