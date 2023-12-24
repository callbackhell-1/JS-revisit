//for
let myArray = ["Batman", "Superman", "flash"];

for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  console.log(element);
}
console.log(myArray.length); //3
/**
Batman
Superman
flash
 */

// break
for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    console.log(`i am ${i} and i am breaking the code`);
    break;
  }
  console.log(`Value is ${i}`);
}
/**
Value is 1
Value is 2
Value is 3
Value is 4
i am 5 and i am breaking the code
 */

for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    continue;
    console.log(`i am ${i} and i am breaking the code`);
    
  }
  console.log(`Value is ${i}`);
}
/**
Value is 1
Value is 2
Value is 3
Value is 4
Value is 6
Value is 7
Value is 8
Value is 9
Value is 10
 */