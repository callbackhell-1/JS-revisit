const tinderUser = {}; // non-singleton objects
const tinderUser1 = new Object(); //singleton objects

console.log(tinderUser1); // {}
console.log(tinderUser); // {} (empty object)

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

console.log(tinderUser); //{ id: '123abc', name: 'Sammy', isLoggedIn: false }

//Nested objects

const regularUser = {
  email: "email@emai.com",
  fullName: {
    userName: {
      firstName: "John",
      lastName: "Doe",
    },
  },
};

// Access nested objects
console.log(regularUser.email);
console.log(regularUser.fullName);
console.log(regularUser.fullName.userName);
console.log(regularUser.fullName.userName.lastName);

/**
 output :
 email@emai.com
{ userName: { firstName: 'John', lastName: 'Doe' } }
{ firstName: 'John', lastName: 'Doe' }
Doe
 */

//concate the objects :

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

const obj3 = { obj1, obj2 }; // this is not the right way
console.log(obj3);
//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

const obj5 = Object.assign({}, obj1, obj2);
console.log(obj5);
//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

/*
 * Explanation :
 * { } is a target , where we want all the source object(obj1,obj2) store.
 */

//spread operator (preferable)
const obj6 = { ...obj1, ...obj2, ...obj4 };
console.log(obj6);
//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

/************/
const users = [
  {
    id: 1,
    name: "John",
  },
  {
    id: 2,
    name: "wick",
  },
  {
    id: 3,
    name: "bruce",
  },
  {
    id: 4,
    name: "wayne",
  },
];

console.log(users);
/**
 [
  { id: 1, name: 'John' },
  { id: 2, name: 'wick' },
  { id: 3, name: 'bruce' },
  { id: 4, name: 'wayne' }
]
 */

console.log(users[1].name); //wick

// To get all the keys of an object

console.log(Object.keys(tinderUser));
//[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));
//[ '123abc', 'Sammy', false ]

//convert object into an array
console.log(Object.entries(tinderUser));
//[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty("isLoggedIn")); //True
//To check whether tinderUser has the prop named as isLoggedIn , if yes return true else false
