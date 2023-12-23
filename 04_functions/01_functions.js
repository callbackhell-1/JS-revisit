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

/*******************************************/
// if we don't have idea of number of arguments

//rest operator (...)
function calculateCartPrice(...num1) {
  return num1;
}

console.log(calculateCartPrice(20, 300, 900));
//[ 20, 300, 900 ]

function calculateCartPrice1(val1, valu2, ...num1) {
  return num1;
}

console.log(calculateCartPrice1(200, 300, 500, 800));
//[ 500, 800 ] -->val1 get 200, val2 gets 300, num1 gets 500&800 in array

/*******/

const user = {
  username: "John_Wick",
  prices: 199,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}

// handleObject(user);
// we can also pass the object in the func args.
handleObject({
  username: "sama",
  price: 399,
});

/**** */

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
  return getArray[1];
}

// console.log(returnSecondValue(myNewArray)); //400
console.log(returnSecondValue([200, 400, 500, 1000])); //400