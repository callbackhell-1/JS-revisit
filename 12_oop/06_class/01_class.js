// ES6

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  //method:
  encryptPassword() {
    return `${this.password}abc`;
  }
  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const john = new User("john", "john@email.com", 123);
console.log(john);
//User { username: 'john', email: 'john@email.com', password: 123 }
console.log(john.encryptPassword()); //123abc
console.log(john.changeUsername()); //JOHN

/**
 * when constructor called ?
 * when an object is initilised using class( using new keyword), constructor will call automatically.
 */

/***********************BEHIND THE SCENE****************/

//What if we didn't get the class then how we do the same thing

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};
User.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};

const wick = new User("wicky", "wick@email.com", 1234);
console.log(wick);

console.log(wick.changeUsername());
console.log(wick.encryptPassword());

/**
 * User { username: 'wicky', email: 'wick@email.com', password: 1234 }
WICKY
1234abc
 */
