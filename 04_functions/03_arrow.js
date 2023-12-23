const user = {
  username: "John",
  price: 1000,
  welcomeUser: function () {
    console.log(`Welcome ${this.username}`);
    console.log(this);
  },
};

//"this"refer to current context ,means {...}

user.welcomeUser(); //Welcome John

user.username = "Wick";
user.welcomeUser(); //Welcome Wick
//Wick printed because, we told to print whatever the  username in current context, print that. user.username = "Wick"; here we change the context(value , hat our varialbe hold)

console.log(this); //{} empty in case of node env., bcpz no global context

/************* */

function check() {
  let name = "John Doe";
  console.log(this);
  console.log(this.name); //undefined (this is not working inside function, but it worked inside object)
}

check();

/****Arrow function**** */

function check() {
  let name = "John Doe";
  console.log(this.name); //undefined
}

const check = () => {
  let name = "John Doe";
  console.log(this); //{}
};

check();

//example of arrow function

const addTwo = (num1, num2) => {
  return num1 + num2;
};

//implict return
const addTwo1 = (num1, num2) => num1 + num2;

// const addTwo2 = (num1, num2) => (num1 + num2); // mostly used in react

const addTwo3 = (num1, num2) => ({ name: "John DOe" });

console.log(addTwo(3, 4)); //7
console.log(addTwo1(8, 4)); //12
// console.log(addTwo2(8, 8)); //16
console.log(addTwo3()); //{ name: 'John DOe' }

//In curly braces we have to write the return keyword, whereas as () we don't
