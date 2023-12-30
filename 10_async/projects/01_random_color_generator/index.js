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
  if (!intervalId) {
    //(intervalId == null)
    intervalId = setInterval(changeBgcolor, 1000);
  }

  function changeBgcolor() {
    document.body.style.backgroundColor = randomColor();
  }
}
function stopChangingColor() {
  clearInterval(intervalId);
  intervalId = null;
}

/**
 * Problem : Problem with this code is, once we start and clicked multiple times on start it , does't stop even if we click on stop button
 *
 * Reason : when we clicked on start button multiple times. Then we overwrite the intervalId value, so when we click on stop button, it stop the latest setInterval , bcoz only the latest setInterval id is there.
 *
 * Solution : Once we click on stop button and pass the intervalId to clearInterval, make the intervalId as null. but why ? so what happen if we click again on start button.
 *
 * It will got to startChangingColor function and check whether  intervalId is nll or not,
 * if null then start the interval , if not nothing happen.
 * if interval starts : we will get a "BRAND NEW intervalId".
 * Now when we tries to stop the interval, we [ass the latest intervalId.
 */

document.getElementById("start").addEventListener("click", startChangingColor);
document.getElementById("stop").addEventListener("click", stopChangingColor);
