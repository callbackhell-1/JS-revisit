console.log("Hello World");

const accountId = 15;
let accountEmail = "hello@email.com";
var accountPass = "12Asdf58@";
accountCity = "LA";
let accountState;

// accountId = 18; // error :TypeError: Assignment to constant variable.
accountEmail = "email@email.com";
accountPass = "12345";
accountCity = "Bengaluru";

console.table([
  accountId,
  accountEmail,
  accountPass,
  accountCity,
  accountState,
]);
