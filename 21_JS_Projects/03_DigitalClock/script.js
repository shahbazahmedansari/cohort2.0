let clock = document.querySelector("#clock");

function updateClock() {
  let now = new Date();

  let hours = now.getHours() % 12 || 12;
  let minutes = now.getMinutes().toString().padStart(2, "0");
  let seconds = now.getSeconds().toString().padStart(2, "0");
  let ampm = now.getHours >= 12 ? "PM" : "AM";

  clock.innerHTML = `${hours} : ${minutes} : ${seconds} ${ampm}`;
}

setInterval(updateClock, 1000);
updateClock();