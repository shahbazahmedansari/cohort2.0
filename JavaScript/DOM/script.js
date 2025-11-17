let h1 = document.querySelector("h1");
let button = document.querySelector("button");

button.addEventListener("click", function () {
  h1.innerHTML = "I am Batman!";
  h1.style.color = "red";
  h1.style.fontSize = "5rem";
});