class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username: ${this.username}`);
  }

  // static
  createId() {
    return `123`;
  }
}
const adarsh = new User("Adarsh");
console.log(adarsh); //User { username: 'Adarsh' }
console.log(adarsh.createId()); //123

/*static concept :
 -> sometimes, we don't want to give access of some method to every object which instantiated from this class. so, for that use "static before the method"

*/

class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username: ${this.username}`);
  }

  // static
  static createId() {
    return `123`;
  }
}

const rohit = new User("rohit");
// rohit.createId();
//Error : TypeError: rohit.createId is not a function

/******* */
class Mobile extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const iphone = new Mobile("iphone", "i@phone.com");
iphone.createId();
//TypeError: iphone.createId is not a function
/**
 * conclusion : once we make static even child, or any class inherited from it, is also not allowed to use that method
 */
