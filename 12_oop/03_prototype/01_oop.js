function multiplyBy5(num) {
  return num * 5;
}

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

//creating a prototype method
function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.increment = function () {
  this.score++;
  console.log(this.score);
};

createUser.prototype.printMe = function () {
  console.log(`price is ${this.score}`);
};

// const user1= createUser("john",10);
// user1.printMe(); // error: Cannot read properties of undefined (user1.printMe();)

const user1= new createUser("john",10);
user1.printMe();//price is 10
user1.increment(); //11