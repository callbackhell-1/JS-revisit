//inheritance
const User = {
  name: "john",
  email: "john@google.com",
};
const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User;

//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher); //TS will now access all the property of Teacher

//Previous req./task

const anoterUsername = "JohnDoe       ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`The length is ${this.trim().length}`);
};

anoterUsername.trueLength();
//JohnDoe : from 'this' we get JohnDoe, why? because in anoterUsername , ref is JohnDoe only
//The length is 7

"JohnWick".trueLength(); //The length is 8, why in this we have reference of johnWick || Johnwick called so trueLength() got the reference of Johnwick.
"Singapore".trueLength(); //The length is 9
