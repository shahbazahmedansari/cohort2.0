function createToaster(config) {
  return function (notification) {
    let div = document.createElement("div");
    div.textContent = notification;
    div.className = `inline-block ${config.theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"} px-6 py-4 rounded-md shadow-md pointer-events-none inline-block`;

    if (config.positionX !== "left" || config.positionY !== "top") {
      document.querySelector(".parent").className += ` ${config.positionX === "right" ? "right-5" : "left-5"} ${config.positionY === "bottom" ? "bottom-5" : "top-5"}`;
    }

    document.querySelector(".parent").appendChild(div);

    setTimeout(() => {
      document.querySelector(".parent").removeChild(div);
    }, config.duration * 1000);
  };
}

let toaster = createToaster({
  positionX: "left",
  positionY: "bottom",
  duration: 3,
  theme: "dark",
});

toaster("Download Completed!");

setTimeout(() => {
  toaster("Friend sent you a request!");
}, 2000);