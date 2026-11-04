const message = document.getElementById("message");
const button = document.getElementById("change-button");

button.addEventListener("click", function () {
  message.textContent = "You changed this message with JavaScript!";
});

const status = document.getElementById("status");
status.textContent = "Ready to learn the DOM!";
