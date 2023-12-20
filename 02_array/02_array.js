const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// 1. push
/*
marvel_heros.push(dc_heros);
// console.log(marvel_heros); //[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// --> Both array didn't concatinate,dc_heros pushed inside marvel_heros arrays.

 console.log(marvel_heros[3][1]); //flash
*/

// 2. concat
/*
const newArray = marvel_heros.concat(dc_heros);
console.log(newArray); // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// -> concat return new array
 */

// 3.  spread operator
const allHeroes = [...marvel_heros, ...dc_heros];
console.log(allHeroes); //[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// flat
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);
/**
 * [
  1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5
]

-> break all the nested array into one array
 */

console.log(Array.isArray("John")); //false
console.log(Array.from("John")); //[ 'J', 'o', 'h', 'n' ]
console.log(Array.from({ name: "John" })); //[]-> interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); //[ 100, 200, 300 ]
