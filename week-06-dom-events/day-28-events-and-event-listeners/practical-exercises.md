# Day 28 Practical Exercises — Listen and Respond

## Exercise 1 — Click event
Select the button in the example and attach a click listener that logs a message.

## Exercise 2 — Counter
Use a number variable and update the output when Increase is clicked.

~~~js
let count = 0;
const output = document.querySelector("#count");
const increaseButton = document.querySelector("#increase-button");

increaseButton.addEventListener("click", function () {
  count = count + 1;
  output.textContent = count;
});
~~~

## Exercise 3 — Reset
Attach a click listener to Reset. Set count to zero and update the output.

## Exercise 4 — Live input
Select the input and preview paragraph. Update the paragraph when the input event happens.

~~~js
const nameInput = document.querySelector("#name-input");
const preview = document.querySelector("#name-preview");

nameInput.addEventListener("input", function () {
  preview.textContent = nameInput.value;
});
~~~

## Required independent task
Add a second counter button called Decrease. It should reduce the count by one but never below zero.

## Checklist
- [ ] I can explain an event.
- [ ] I attached a click listener.
- [ ] I updated a counter.
- [ ] I reset the counter.
- [ ] I used the input event and value property.

## Optional challenge
Create a button that changes the page message each time it is clicked. Use a named function as the listener.

## Troubleshooting
Check that selectors match HTML IDs, event names are spelled correctly, and the callback is passed without parentheses.
