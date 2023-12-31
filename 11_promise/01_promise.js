// creation of promise
const promiseOne = new Promise(function (resolve, reject) {
  //Do an async task
  // DB calls, cryptography, network
  setTimeout(function () {
    console.log("Async task 1 is compelete");
    resolve();
  }, 1000);
});

//consumption of promises
promiseOne.then(() => {
  console.log("Promise consumed 1");
});

// Method 2 :
new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async 2 task is completed");
    resolve();
  }, 1000);
}).then(() => {
  console.log("Promised consumed 2");
});

//Method 3 : sending any value using resolve

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: "John Doe", email: "email@email.com" });
  }, 1000);
});

promiseThree.then((output) => {
  console.log(output); //{ name: 'John Doe', email: 'email@email.com' }
});

//Method 4 : using reject

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "John", password: "123" });
    } else {
      reject("Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((err) => {
    console.log(err);
  });

//Something went wrong

// Method 5 :.then chaining
const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "John", password: "123" });
    } else {
      reject("Something went wrong");
    }
  }, 1000);
});

promiseFive
  .then((user) => {
    console.log(user);
    return user.username; //{ username: 'John', password: '123' }
  })
  .then((username) => {
    console.log(username); //John
  })
  .catch((err) => {
    console.log(err);
  });
/**
 * .then chaining :
 * 
 * promiseFive
  .then((user) => {
    console.log(user);
    return user.username; 
  })

Here whatever in return value , in this case (user.username) . so this (user.username) value i.e, "John" will passed to next .then ||

And in that ".then",  "John" is passed as an parameter
 *  
 */

// finally : Always execute, incase of rej also and res also

const promiseSix = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "John", password: "123" });
    } else {
      reject("Something went wrong");
    }
  }, 1000);
});

promiseSix
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Promise is either resolved or rejected !");
  });

//Something went wrong
// Promise is either resolved or rejected !
