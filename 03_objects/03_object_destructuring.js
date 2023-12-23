const course = {
  coursename: "Javascript",
  price: "999",
  courseInstructor: "John",
};

const { courseInstructor } = course; // this is object destructuring
console.log(courseInstructor); //John

const { coursename: name } = course;
console.log(name); //Javascript


// API format 
{
    "name": "John",
    "coursename": "js",
    "price": "900$"
}

[
    {},
    {},
    {}
]