// Initializations
const minutesToWait = 10;


// Built in setInterval function 
// Starts 10 minute timer, reloads page after time is up
let interval = window.setInterval(() => {
  location.reload(true);
}, 1000 * 60 * minutesToWait);


// Add Event listener to entire document to reset timer when any input is detected
document.querySelector('html').addEventListener('click', () => {
  window.clearInterval(interval);
  interval = window.setInterval(() => {
    location.reload(true);
  }, 1000 * 60 * minutesToWait);
});