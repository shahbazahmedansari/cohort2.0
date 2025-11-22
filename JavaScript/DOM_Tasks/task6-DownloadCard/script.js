const downloadBar = document.querySelector(".inner");
const button = document.querySelector("#downloadBtn");
const percent = document.querySelector("#percent");
let percentage = 0;

button.addEventListener("click", function () {

  setInterval(function () {
    if (percentage < 100) {
      percentage++;
      console.log(percentage);
      percent.innerHTML = `${percentage}%`;
      downloadBar.style.width = `${percentage}%`;
      button.disabled = true;
      button.style.cursor = "not-allowed";
      button.style.opacity = 0.6;
      button.style.pointerEvents = "none";
      button.style.backgroundColor = "lightgreen";
      button.style.color = "black";
    } else if (percentage === 100) {
      button.innerHTML = "Downloaded";
    }
  }, 100);
});