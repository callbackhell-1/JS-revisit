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
