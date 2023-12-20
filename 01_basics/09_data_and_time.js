// Date

let myDate = new Date();
console.log(myDate); //2023-12-20T15:57:42.250Z
console.log(myDate.toString()); //Wed Dec 20 2023 21:28:15 GMT+0530 (India Standard Time)
console.log(myDate.toLocaleDateString()); //20/12/2023

console.log(typeof myDate); //object

// For specific date
// month starts from '0'

const myCreatedDate = new Date(2023, 0, 13);
console.log(myCreatedDate.toString()); //Fri Jan 13 2023 00:00:00 GMT+0530 (India Standard Time)

const myCreatedDate1 = new Date(2023, 1, 13);
console.log(myCreatedDate1.toString()); //Mon Feb 13 2023 00:00:00 GMT+0530 (India Standard Time)

// read about date formats (MM-DD-YYYY)

//***************Time************/

let myTime = Date.now();
console.log(myTime); //1703101662834 in ms

//in seconds
console.log(Math.floor(Date.now()/1000));  //1703101778

// ******/

let newDate = new Date();
console.log(newDate.getDay());//4
console.log(newDate.getMonth() + 1);//12


//read about toLocaledate