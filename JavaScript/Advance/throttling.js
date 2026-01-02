// throttling

function throttle(fn, delay) {
  let last = 0;
  return function () {
    const now = Date.now();
    if (now - last >= delay) {
      last = now;
      fn();
    }
  };
}

window.addEventListener("mousemove", throttle(function () {
  console.log("Stop");
}, 2000));