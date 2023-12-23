//function defn:
function sayMyName() {
  console.log("J");
  console.log("O");
  console.log("H");
  console.log("N");
}

sayMyName; // function reference
console.log(sayMyName); //[Function: sayMyName]

sayMyName();
/**
J
O
H
N
 */

function addTwoNumbers(number1, number2) {
  console.log(number1 + number2);
}

function addTwoNumbers(number1, number2) {
  // let result = number1 + number2
  // return result
  return number1 + number2;
}

const result = addTwoNumbers(3, 5);
console.log("Result: ", result);

/***2.*/

function loginUserMessage(username = "sam Altman") {
  //sam altman is default username. , if nothing passed automatic sam altman will pass as username
  if (!username) {
    console.log("PLease enter a username");
    return;
  }
  return `${username} just logged in`;
}

console.log(loginUserMessage("John")); //John just logged in
console.log(loginUserMessage()); //sam Altman just logged in
