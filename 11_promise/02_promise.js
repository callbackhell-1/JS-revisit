// handle promise using async await

const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "John", password: "123" });
    } else {
      reject("Something went wrong");
    }
  }, 1000);
});

async function promiseConsume() {
  try {
    const response = await promiseOne;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

promiseConsume();
// Something went wrong
