// Update current time in milliseconds
function updateTime() {
  const timeElement = document.getElementById("current-time");
  if (timeElement) {
    timeElement.textContent = Date.now();
  }
}

// Update time immediately and then every 100ms
updateTime();
setInterval(updateTime, 100);
