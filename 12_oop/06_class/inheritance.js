class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`USERNAME is ${this.username}`);
  }
}

//when we built any ecom website/hospital/edtech app then sometimes we need to make this user admin/doctor/teacher/student .

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }
}

/**
 * here super keyword refer, from which class we extends.
 * so here in our case it goes to User class , then go to constructor class and automatically "this"  also sent from Teacher class and that username will be set in "this".
 * and we get username from User class to Teacher class
 */
