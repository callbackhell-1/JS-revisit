class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`USERNAME is ${this.username}`);
  }
}

//when we built any ecom website/hospital/edtech app then sometimes we need to make this user admin/doctor/teacher/student .

class Teacher extends User {}
//By this we get all the property of User into Teacher class
