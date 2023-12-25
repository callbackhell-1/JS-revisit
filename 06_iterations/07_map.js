const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = myNumbers.map((num) => {
  return num + 10;
});

console.log(result);
/*
[
  11, 12, 13, 14, 15,
  16, 17, 18, 19, 20
]
*/

//Map chaining
// const newNums = myNumbers.map().map().filter();

const newNums = myNumbers
  .map((nums) => {
    return nums + 10;
  })
  .map((nums) => {
    return nums * 10;
  })
  .filter((nums) => {
    return nums > 100;
  });
console.log(newNums);
/*
[
  110, 120, 130, 140,
  150, 160, 170, 180,
  190, 200
]
*/

const newNums1 = myNumbers
  .map((nums) => nums + 10)
  .map((nums) => nums * 10)
  .filter((nums) => nums > 150);
console.log(newNums1);

/*
[ 160, 170, 180, 190, 200 ]
*/
