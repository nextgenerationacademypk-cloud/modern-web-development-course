# Day 30 Instructor Guide — To-Do List Project

## Teaching goal
Bring together the week's DOM and event skills in one achievable beginner project. Prioritise understanding and a working core app over visual complexity.

## Before class
- Test the starter files in Chrome.
- Prepare a completed instructor demonstration.
- Confirm all students can open the project folder.
- Keep the project requirements visible.
- Do not require students to install packages or use a framework.

## Learning outcomes
Students handle form submission, validate a text value, create list elements, append them, and remove them with a button.

## 120-minute plan
| Time | Activity |
|---|---|
| 0–20 min | Explain requirements and review DOM methods |
| 20–24 min | Four-minute review quiz |
| 24–54 min | Build a single task from form to delete button |
| 54–116 min | Students complete, test, and style the app |
| 116–120 min | Quick demonstrations and reflection |

## Instructor demonstration
1. Open the starter page and identify the form, input, message, and list.
2. Select the four elements in JavaScript.
3. Attach a submit listener and prevent default navigation.
4. Read input.value and apply trim().
5. Show a helpful error for empty input.
6. Create li, span, and button elements.
7. Set user text with textContent.
8. Attach a click listener that removes the current li.
9. Append the span and button to li, then li to the list.
10. Clear the input and show success feedback.

## Board visual
Use images/day-30-todo-project-flow.svg. Emphasise the sequence: submit → validate → create → append → delete.

## Questions
- Why is the form submit event useful?
- Why should we use textContent for a task typed by a user?
- Why does the delete listener remove the current item?
- What would be needed to keep tasks after a refresh? Accept "save them somewhere" as a starting answer; do not teach storage APIs today.

## Common problems
- Page refreshes: check preventDefault().
- Empty tasks appear: check trim() and the condition.
- Delete removes wrong item: ensure the listener closes over the correct item variable.
- Task appears as text in Console only: append the li to the list.
- Student expects persistence: clarify this is an in-memory DOM exercise.

## Differentiation
- Support: give students the completed HTML and CSS, then complete JavaScript in small sections.
- Core: add and delete tasks.
- Extension: add completed styling or a task counter after the core app works.

## Assessment
Use the 10-mark rubric in the Day 30 README. Award marks for the required behaviour, not for decorative styling. Students should explain their own code.

## Final checkpoint
Each student adds one task, adds a second task, deletes one task, and explains why an empty task is rejected.
