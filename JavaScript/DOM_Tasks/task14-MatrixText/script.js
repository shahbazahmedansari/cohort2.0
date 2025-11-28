document.body.addEventListener("mousemove", (e) => {
  document.body.style.setProperty("--x", `${e.clientX}px`);
  document.body.style.setProperty("--y", `${e.clientY}px`);
});

const para = document.querySelector("p");
const box = document.querySelector(".box");
const text = para.innerText;
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let iteration = 0;

function randomText() {
  const str = text.split("").map((char, index) => {
    if (index < iteration) {
      return char;
    }
    return characters.split("")[Math.floor(Math.random() * 52)];
  }).join("");

  iteration += 0.25;

  para.innerText = str;
}

box.addEventListener("mouseenter", () => {
  setInterval(randomText, 20);
});