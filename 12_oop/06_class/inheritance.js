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
  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}

const Jack = new User("Jack");
console.log(Jack);
Jack.logMe();
/**
 * User { username: 'Jack' }
USERNAME is Jack

 */

const jackTeacherJoe = new Teacher(
  "jackTeacherJoe",
  "jackTeacherJoe@email.com",
  111
);
console.log(jackTeacherJoe);
jackTeacherJoe.addCourse();

/**
 * Teacher {
  username: 'jackTeacherJoe',
  email: 'jackTeacherJoe@email.com',
  password: 111
}
A new course was added by jackTeacherJoe
 */

jackTeacherJoe.logMe(); // USERNAME is jackTeacherJoe

console.log(Jack === jackTeacherJoe); //false
console.log(Jack instanceof User); //true
console.log(Jack instanceof Teacher); //false
console.log(jackTeacherJoe instanceof User); //true
console.log(jackTeacherJoe instanceof Teacher); //true