# Day 26 Practical Exercises — Select and Change

## Setup
1. Open this day's folder in VS Code.
2. Open examples/index.html with Live Server.
3. Keep DevTools Console available.

## Exercise 1 — Explore the document
In Console, type:

~~~js
document
document.title
document.body
~~~

Observe the results.

## Exercise 2 — Select by ID
~~~js
document.getElementById("page-title")
document.getElementById("message")
~~~

Find each matching element in the Elements panel.

## Exercise 3 — Select with CSS selectors
~~~js
document.querySelector("h1")
document.querySelector(".intro")
document.querySelector("#message")
~~~

Explain which part of each selector identifies the element.

## Exercise 4 — Read and change text
~~~js
const message = document.getElementById("message");
console.log(message.textContent);
message.textContent = "I changed this text with JavaScript.";
~~~

Refresh the page. What happens to the change?

## Exercise 5 — Guided button interaction
Complete script.js so the button changes the message when clicked:

~~~js
const message = document.getElementById("message");
const button = document.getElementById("change-button");

button.addEventListener("click", function () {
  message.textContent = "My first DOM interaction works!";
});
~~~

Save and test.

## Required independent task
Add a second paragraph with ID status. Select it in JavaScript and change its text to "Ready to learn the DOM!" when the page loads.

## Checklist
- [ ] I can explain DOM in simple words.
- [ ] I selected an element by ID.
- [ ] I selected an element with querySelector.
- [ ] I read and changed textContent.
- [ ] My button updates the paragraph.

## Optional challenge
Use querySelector(".intro") to select the introductory paragraph and change its text.

## Troubleshooting
If a selector returns null, check that the element exists and the selector matches exactly. If the script does not run, check the script path and defer.
