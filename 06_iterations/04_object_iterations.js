const myObject = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple",
};

//for in loop

for (const key in myObject) {
  console.log(key);
}
/**
 js
cpp
rb
swift
 */

for (const key in myObject) {
  console.log(`${key} : ${myObject[key]}`);
}

/*
js : javascript
cpp : C++
rb : ruby
swift : swift by apple
*/
for (const key in myObject) {
  console.log(`${key} : ${myObject.key}`);
}
/*
js : undefined
cpp : undefined
rb : undefined
swift : undefined
*/

///for in with array

const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
  console.log(`${key}:${programming[key]}`);
}

/*
0:js
1:rb
2:py
3:java
4:cpp
*/

//-> for in , is not iterable in case of Map
