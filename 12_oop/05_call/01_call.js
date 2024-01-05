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
