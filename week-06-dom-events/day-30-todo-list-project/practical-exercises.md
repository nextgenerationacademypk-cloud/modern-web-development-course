# Day 30 Practical Exercises — Guided To-Do List

## Step 1 — Open the starter project
Open examples/index.html with Live Server. Read the HTML and identify the form, input, feedback message, and empty list.

## Step 2 — Select the elements
In script.js, select the form, input, list, and message with querySelector().

## Step 3 — Listen for submission
Add a submit listener to the form. Call event.preventDefault() inside the callback.

## Step 4 — Validate the text
Read taskInput.value and call trim(). If it is empty, show a helpful message and return.

## Step 5 — Create the list item
Create an li, a span, and a button with document.createElement(). Set the span text with textContent. Set the button text to Delete and its type to button.

## Step 6 — Add delete behaviour
Attach a click listener to the delete button. Inside the listener, remove the li created for this task.

## Step 7 — Assemble and append
Append the span and button to the li. Append the li to the task list.

## Step 8 — Finish the interaction
Clear the input and show a success message after a valid task is added.

## Required independent work
Customise the heading and CSS. Add at least three sample tasks and demonstrate deleting one. Test empty input and spaces-only input.

## Test checklist
- [ ] Empty input is rejected.
- [ ] Spaces-only input is rejected.
- [ ] A valid task appears.
- [ ] Several tasks can be added.
- [ ] Each Delete button removes its own task.
- [ ] No page reload occurs during submission.
- [ ] Task text is inserted with textContent.

## Optional challenge
Add a task counter that updates when a task is added or deleted. Do this only after the core requirements work.

## Troubleshooting
Read the Console error. Check selector IDs, listener placement, append order, and the variable that refers to the current li.
