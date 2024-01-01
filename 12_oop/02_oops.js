//Object literal

const user = {
  username: "John Doe",
  loginCount: 8,
  signedIn: true,
};

console.log(user.loginCount); //8

// this keyword : current context
const user1 = {
  username: "John",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    console.log("Got user details");
    console.log(`username is ${this.username}`);
    console.log(this);
    /**
     * output of this : is current context (ie, in function context)
{
  username: 'John',
  loginCount: 8,
  signedIn: true,
  getUserDetails: [Function: getUserDetails]
}
     */
  },
};

console.log(user1.getUserDetails()); //username is John

//this in global context :
console.log(this); //{} (empty object, ie. nothing in global context) [in Node env]

console.log(this); // {windows object} [in browser env.]

//constructor function
const promise = new Promise();
const date = new Date();
/**
 * new keyword is constructor function
 * what does it do?
 * This allow to make multiple instace from one object literal.
 *const. fun gives new instances/new copy, so it doesn't affect other user code.

 */

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  return this;
}

const newUser = User("John", "15", true);
console.log(newUser);

/**
 * {
 * <ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Getter/Setter],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  crypto: [Getter],
  username: 'John',
  loginCount: '15',
  isLoggedIn: true
}

 * }
 */

/**
 * what is this? in global empty obj.
 * so, we are assigning some value to the this example
 * this.username = username;
 * Now when we will return this , "this" will not {}(empty).
 * it will have some value.
 */

const newUser2 = User("Doe", 2, true);
console.log(newUser);
console.log(newUser2);

/**
 * {
 <ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Getter/Setter],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  crypto: [Getter],
  username: 'Doe',
  loginCount: 2,
  isLoggedIn: true
}
<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Getter/Setter],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  crypto: [Getter],
  username: 'Doe',
  loginCount: 2,
  isLoggedIn: true
}

 * }
 */

/**
 * No if we see the output newUser & newUser2 both contain the same value,
 username: 'Doe',
  loginCount: 2,
  isLoggedIn: true

  But for the newUser , username was "John".
  So, this is not the Ideal way because it overwrites the value
 */
