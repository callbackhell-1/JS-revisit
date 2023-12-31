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
