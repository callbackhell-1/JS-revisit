function SetUsername(username) {
  //complex DB calls
  this.username = username;
}

function createUser(username, email, password) {
  SetUsername(username);

  this.email = email;
  this.password = password;
}

const john = new createUser("johndoe", "john@email.com", "122");

console.log(john);
/**
 createUser { email: 'john@email.com', password: '122' }
 why username not printed ? 
 reason :
 let see the code execution :

 Line 13: new object create of function createUser 
 
 execution goes to Line 6 : with corresponding args.

 Line 7 : SetUsername function called & we passed username it it.

 execution goes to Line 1 : function SetUsername set the username in current context and pop out of call stack.

execution come back to LIne 9 : email,password is set within the current context . so it printed in console and not username

} 
 */
function SetUsername(username) {
  //complex DB calls
  this.username = username;
}

function createUser(username, email, password) {
  SetUsername.call(this, username);

  this.email = email;
  this.password = password;
}

const john1 = new createUser("johndoe", "john@email.com", "122");

console.log(john1);

/**
 * createUser {
  username: 'johndoe',
  email: 'john@email.com',
  password: '122'
}
--> call pass our execution context to other funtion.

Explaination :

-> using .call we hold the reference of setUsername function
-> but problem is still there, when SetUsername  pop out of call stack. "this" also removed . so we need to pass this also, from calling function.so that this "this" hold the value of username.
-> even if  SetUsername  pop out and corresponding this also vanish but as we pass "this" from createUser, so this "this" holds the value of username

 */
