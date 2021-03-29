// log it out so you know it's working :)
console.log("content scripts");

// define behavior
function updateStrokeColor(color) {
  let paths = document.querySelectorAll("path");

  for (path of paths) {
    path.style.stroke = color;
  }
}

// everything inside the {} below will be ran on a loop, loop delay is defined at the end in ms.
window.setInterval(function() {
  updateStrokeColor("#00C805");
}, 1000);
