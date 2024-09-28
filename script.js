const months = [
  '"January"',
  '"February"',
  '"March"',
  '"April"',
  '"May"',
  '"June"',
  '"July"',
  '"August"',
  '"September"',
  '"October"',
  '"November"',
  '"December"',
];

function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minute = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const period = now.getHours() >= 12 ? '"PM"' : '"AM"';
  const day = String(now.getDate()).padStart(2, "0");
  const month = months[now.getMonth()];
  const year = now.getFullYear();

  document.querySelectorAll("#hour")[0].innerText = hours;
  document.querySelectorAll("#minute")[0].innerText = minute;
  document.querySelectorAll("#seconds")[0].innerText = seconds;
  document.querySelectorAll("#period")[0].innerText = period;
  document.querySelectorAll("#day")[0].innerText = day;
  document.querySelectorAll("#month")[0].innerText = month;
  document.querySelectorAll("#year")[0].innerText = year;
}

setInterval(updateClock, 1000);
updateClock();
