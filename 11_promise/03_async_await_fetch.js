async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const responseInJsonForamt = await response.json();
    console.log(responseInJsonForamt);
  } catch (error) {
    console.log("error :", error);
  }
}

getAllUsers();

// fetch using then promise

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    let result = response.json(); //convert response in json
    return result;
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("error ", err);
  });
