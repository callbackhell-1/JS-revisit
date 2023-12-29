const clock = document.querySelector("#clock");
const currentDate = new Date();
const hours = currentDate.getHours();
const mins = currentDate.getMinutes();
const secs = currentDate.getSeconds();

const time = currentDate.toLocaleTimeString();

// clock.innerHTML = `${hours}:${mins}:${secs}`;
clock.innerHTML = `${time}`;

//using setInterval

setInterval(() => {
  const currentDate = new Date();
  const time = currentDate.toLocaleTimeString();
  clock.innerHTML = `${time}`;
}, 1000);
