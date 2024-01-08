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
