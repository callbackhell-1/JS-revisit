//generate random color

function randomColor() {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}
let intervalId;
function startChangingColor() {
  intervalId = setInterval(changeBgcolor, 1000);

  function changeBgcolor() {
    document.body.style.backgroundColor = randomColor();
  }
}
function stopChangingColor() {
  clearInterval(intervalId);
}

/**
 * Problem with this code is, once we start and clicked multiple times on start it , does't stop even if we click on stop button
 */

document.getElementById("start").addEventListener("click", startChangingColor); 
document.getElementById("stop").addEventListener("click", stopChangingColor);

