const timeEl = document.querySelector(".time");
const DateEl = document.querySelector(".date");

timeEl.textContent = "Loading Time.......";
DateEl.textContent = "Loading Date.......";

function updateClock() {
  let CurrentDate = new Date();
  let hours = CurrentDate.getHours();
  let Minutes = CurrentDate.getMinutes();
  let Seconds = CurrentDate.getSeconds();

  let Day = CurrentDate.getDate();
  let Month = CurrentDate.getMonth() + 1;
  let Year = CurrentDate.getFullYear();

  let ampm = hours >= 12 ? "PM" : "AM";

  //   hours = hours < 10 ? "0" + hours : hours;
  //   Minutes = Minutes < 10 ? "0" + Minutes : Minutes;
  //   Seconds = Seconds < 10 ? "0" + Seconds : Seconds;
  //   Day = Day < 10 ? "0" + Day : Day;
  //   Month = Month < 10 ? "0" + Month : Month;

  //   modern
  hours = String(hours).padStart(2, "0");
  Minutes = String(Minutes).padStart(2, "0");
  Seconds = String(Seconds).padStart(2, "0");
  Day = String(Day).padStart(2, "0");
  Month = String(Month).padStart(2, "0");

  timeEl.textContent = `${hours}:${Minutes}:${Seconds} ${ampm}`;
  DateEl.textContent = `${Day}:${Month}:${Year}`;
}

setTimeout(() => {
  updateClock();
  setInterval(updateClock, 1000);
}, 2000);
