# Week 6 — DOM Manipulation and Events

## Goal

Use JavaScript to read and change webpage elements and respond to user actions.

## Day-by-day lessons

### Day 26 — Understanding the DOM
- Understand that the browser represents a page as objects.
- Select elements with `querySelector()` and `getElementById()`.
- Read and change text with `textContent`.

### Day 27 — Events
- Learn click and input events.
- Use `addEventListener()`.
- Make a button change a heading or page message.

### Day 28 — Forms and basic validation
- Read input values.
- Check that required fields are not empty.
- Show a helpful message to the user.
- Do not claim that a practice form sends data to a server.

### Day 29 — Creating and removing elements
- Create elements with `document.createElement()`.
- Add elements with `append()` or `appendChild()`.
- Remove an item when a button is clicked.

### Day 30 — To-do list project
- Combine inputs, buttons, events, and DOM updates.
- Add tasks and remove completed or unwanted tasks.
- Review code and test empty input.

## Example: update a heading

HTML:

```html
<h1 id="message">Welcome</h1>
<button id="change-button">Change message</button>
<script src="script.js" defer></script>
```

JavaScript:

```javascript
const message = document.querySelector("#message");
const button = document.querySelector("#change-button");

button.addEventListener("click", function () {
  message.textContent = "You clicked the button!";
});
```

## Practical exercises

1. Select a heading with JavaScript.
2. Change its text when a button is clicked.
3. Read a value from an input.
4. Show a message if an input is empty.
5. Add a new list item when a user submits a task.

## Homework

Complete a to-do list app. Users should be able to add a task, see it in a list, and remove it. Do not add complex features such as accounts or databases.

## Quick review

1. What does DOM mean?
2. What does `querySelector()` return?
3. What is an event?
4. Why do we use `addEventListener()`?
5. How can JavaScript create a new HTML element?

## Expected result

A working beginner to-do list app with basic input checking and dynamic page updates.
