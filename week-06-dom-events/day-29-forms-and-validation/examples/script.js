const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const message = document.querySelector("#form-message");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    message.textContent = "Please enter a task before continuing.";
    return;
  }

  message.textContent = "Task accepted: " + taskText;
  form.reset();
});
