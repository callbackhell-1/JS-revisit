// ["","",""];
// [{},{},{}];

//1. for of :

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  console.log(num);
}
/*
1
2
3
4
5
*/

// using with string
const name = "John Wick";
for (const value of name) {
  console.log(value);
}
/**
J
o
h
n
 
W
i
c
k
 */

//Maps
const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India");

console.log(map);
/**
 Map(3) {
  'IN' => 'India',
  'USA' => 'United States of America',
  'Fr' => 'France'
}
 */

for (const key of map) {
  console.log(key);
}
/*
[ 'IN', 'India' ]
[ 'USA', 'United States of America' ]
[ 'Fr', 'France' ]
*/

for (const [key, value] of map) {
  console.log(key, value);
}
/**
 IN India
USA United States of America
Fr France
 */

//for of loop in object is not work , err : myObj is not iterable
const myObj = {
  game1: "Spiderman",
  game2: "GTA",
};

for (const keys of myObj) {
  console.log(keys);
}
