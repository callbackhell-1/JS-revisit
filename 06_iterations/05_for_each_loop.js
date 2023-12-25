const coding = ["js", "ruby", "java", "python", "cpp"];

//forEach takes callback func., so it is hof
coding.forEach((value) => {
  console.log(value);
});

coding.forEach(function (items) {
  console.log(items);
});
/*
js
ruby
java
python
cpp
*/

function printMe(item_new) {
  console.log(item_new);
}

coding.forEach(printMe);
/*
js
ruby
java
python
cpp
*/

coding.forEach((item, idx, arr) => {
  console.log(item, idx, arr);
});
/*
js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]

*/

/******************forEach with objects */
const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

myCoding.forEach((value) => {
  console.log(value);
});

/*
{ languageName: 'javascript', languageFileName: 'js' }
{ languageName: 'java', languageFileName: 'java' }
{ languageName: 'python', languageFileName: 'py' }
*/

myCoding.forEach((value) => {
  console.log(value.languageFileName);
});
/*
js
java
py
*/
