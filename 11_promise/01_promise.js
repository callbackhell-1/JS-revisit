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

