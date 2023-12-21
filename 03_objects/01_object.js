// singleton  : object.create

// object literals
const mySym = Symbol("key1");

const JsUser = {
  name: "John",
  "full name": "John  Doe",
  [mySym]: "mykey1", //symbol notation
  age: 18,
  location: "Newyork",
  email: "John@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
  goodMorning: function () {
    console.log("Good morning");
  },
};

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

//Update
JsUser.email = "John@chatgpt.com";
// Object.freeze(JsUser) --> This freeze the object furthur change will  not reflect in object
JsUser.email = "John@microsoft.com";
console.log(JsUser);

//function in object
// --> In JS function is trated as an key only

JsUser.greetings = function () {
  console.log("Hello JS users");
};

console.log(JsUser.greetings()); //Hello JS users
// undefined

JsUser.greetingAgain = function () {
  console.log("good evening");
};

console.log(JsUser.greetingAgain); //[Function (anonymous)]
console.log(JsUser.greetingAgain()); //good evening
// undefined

console.log(JsUser.goodMorning());
//Good morning
// undefined