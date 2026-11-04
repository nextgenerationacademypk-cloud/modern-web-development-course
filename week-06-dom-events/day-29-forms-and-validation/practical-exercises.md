# Day 29 Practical Exercises — Form Validation

## Exercise 1 — Inspect the form
Find the form, label, input, submit button, and feedback paragraph in the example HTML. Check that the label for matches the input id.

## Exercise 2 — Listen for submit
~~~js
const form = document.querySelector("#task-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Form handled in JavaScript.");
});
~~~

Submit the form and confirm the page does not navigate.

## Exercise 3 — Read and trim
~~~js
const taskInput = document.querySelector("#task-input");
const taskText = taskInput.value.trim();
console.log(taskText);
~~~

Try a normal word, an empty field, and spaces only.

## Exercise 4 — Show feedback
Complete the if/else condition so empty text receives an instruction and valid text receives a success message.

## Required independent task
Add a second field for a short category. Check that the task is not empty and show both values in a confirmation message. Use fictional sample information only.

## Checklist
- [ ] Label is connected to the input.
- [ ] Form listens for submit.
- [ ] Default navigation is prevented.
- [ ] Input value is read and trimmed.
- [ ] Empty and valid values show different feedback.

## Optional challenge
Use the HTML maxlength attribute and display a message if a task is longer than 60 characters.

## Important
This form does not send or save information. Never use it to collect passwords or private details.
