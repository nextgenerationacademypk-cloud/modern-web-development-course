const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");
const message = document.querySelector("#message");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const taskText = taskInput.value.trim();

  if (taskText === "") {
    message.textContent = "Please enter a task before adding it.";
    taskInput.focus();
    return;
  }

  const item = document.createElement("li");
  const taskLabel = document.createElement("span");
  const deleteButton = document.createElement("button");

  taskLabel.textContent = taskText;
  deleteButton.textContent = "Delete";
  deleteButton.type = "button";
  deleteButton.setAttribute("aria-label", "Delete task: " + taskText);

  deleteButton.addEventListener("click", function () {
    item.remove();
    message.textContent = "Task deleted.";
  });

  item.appendChild(taskLabel);
  item.appendChild(deleteButton);
  taskList.appendChild(item);

  form.reset();
  message.textContent = "Task added.";
  taskInput.focus();
});
