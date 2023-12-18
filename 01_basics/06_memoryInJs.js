// stack , heap
/**
 * Stack (primitive) -> whatever variable we declared, we get a copy.
 
 * Heap (non-primitive) -> whatever variable we declared, we get the ref., whatever we will change it will change in original value
 */

let name = "John";
let newName = name;
newName = "John Doe";

console.log(name); //John
console.log(newName); //John Doe

let userOne = {
  name: "UserOne",
  city: "NewYork",
};
let userTwo = userOne;
userTwo.name = "Tony stark";

console.log(userOne, userTwo);

//{ name: 'Tony stark', city: 'NewYork' } { name: 'Tony stark', city: 'NewYork' }