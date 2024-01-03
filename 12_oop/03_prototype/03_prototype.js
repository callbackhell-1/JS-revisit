let myName = "John     ";
let mychannel = "CNN     ";

console.log(myName.length); //9
console.log(mychannel.length); //8

// reqirement : create a function/method that gives a actual length ie., remove space and extra character (without using trim) and available with all the strings

console.log(myName.trueLength); //undefined

//start :
let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

// heroPower.printJohn(); //heroPower.printJohn is not a function

//inject any method in object, as we know string,array prototype is object.so, we are injecting in direct object by doing this, array,oject,string will get that method by default

Object.prototype.printJohn = function () {
  console.log(`John is everywhere`);
};

// now as object have method john, so it is available in object(heroPower) as well

heroPower.printJohn(); //John is everywhere

myHeros.printJohn(); //John is everywhere

//read notes also

// CASE 2 : if we add the method in array, will it accessible in object?

Array.prototype.sayMyName = function () {
  console.log("Your name comes from an Array !");
};

myHeros.sayMyName(); //Your name comes from an Array !


heroPower.sayMyName(); //TypeError: heroPower.sayMyName is not a function