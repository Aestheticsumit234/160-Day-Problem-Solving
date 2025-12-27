const timeEl = document.querySelector(".time");
const DateEl = document.querySelector(".date");
function updateTimeAndDate() {
  const now = new Date();
  const options = { weekday: "long", month: "long", day: "numeric" };
  const dateString = now.toLocaleDateString(undefined, options);
  const timeString = now.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  timeEl.textContent = timeString;
  DateEl.textContent = dateString;
}
setInterval(updateTimeAndDate, 1000);
updateTimeAndDate();
