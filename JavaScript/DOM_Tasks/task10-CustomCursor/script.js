const image = document.querySelector("img");
const body = document.body;

body.addEventListener("mousemove", function (dets) {
  console.log(dets);
  image.style.left = dets.x + "px";
  image.style.top = dets.y + "px";
});