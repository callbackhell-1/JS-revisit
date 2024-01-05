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

 */