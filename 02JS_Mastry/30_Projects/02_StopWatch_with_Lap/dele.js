let Minutes = 0;
let Seconds = 0;
let MilliSeconds = 0;
let Timer = null;
let isRuning = false;
let laps = document.getElementById("laps");
let Display = document.getElementById("Display");

function updateTime() {
  MilliSeconds++;
  if (MilliSeconds === 100) {
    MilliSeconds = 0;
    Seconds++;
  }

  if (Seconds === 60) {
    Seconds = 0;
    Minutes++;
  }

  // Display.innerText =
  //   String(Minutes).padStart(2, "0") +
  //   ":" +
  //   String(Seconds).padStart(2, "0") +
  //   ":" +
  //   String(MilliSeconds).padStart(2, "0");

  Display.innerText =
    String(Minutes).padStart(2, "0") +
    ":" +
    String(Seconds).padStart(2, "0") +
    ":" +
    String(MilliSeconds).padStart(2, "0");
}
// start button
document.getElementById("start").addEventListener("click", () => {
  if (!isRuning) {
    Timer = setInterval(updateTime, 10);
    isRuning = true;
  }
});

// pause button
document.getElementById("stop").addEventListener("click", () => {
  clearInterval(Timer);
  isRuning = false;
});

// rest button
document.getElementById("reset").addEventListener("click", () => {
  clearInterval(Timer);
  isRuning = false;
  Minutes = 0;
  Seconds = 0;
  MilliSeconds = 0;
  Display.innerText = "00:00:00";
  laps.innerHTML = "";
});

// lap button
document.getElementById("lap").addEventListener("click", () => {
  if (!isRuning) return;
  const li = document.createElement("li");
  li.innerText = `Lap ${laps.children.length + 1} - ${Display.innerText}`;
  laps.appendChild(li);
});
