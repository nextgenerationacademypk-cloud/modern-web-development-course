# Day 21 Instructor Guide — Introduction to JavaScript

## Teaching purpose
Connect JavaScript to the HTML/CSS knowledge students already have. Keep the first lesson reassuring: students should see that JavaScript is another file in their existing website project.

## Prepare
- VS Code with a simple project folder.
- Chrome and DevTools.
- Today's `examples/index.html` and `script.js`.
- Projector or screen large enough to show the Console tab.

## Outcomes
Students explain HTML/CSS/JavaScript roles, link an external script, print messages, and locate the browser console.

## 120-minute lesson
| Time | Activity |
|---|---|
| 20 min | Explain the three web technologies and JavaScript's role |
| 4 min | Recall HTML structure and CSS linking |
| 30 min | Instructor demo: add script, log messages, open Console |
| 62 min | Guided and independent student practice |
| 4 min | Exit review |

## Demonstration sequence
1. Open the existing HTML/CSS project.
2. Add `script.js` in the same folder.
3. Link it using `<script src="script.js" defer></script>`.
4. Print two messages using `console.log()`.
5. Open DevTools and select Console.
6. Change a message, save, and refresh.
7. Intentionally misspell the script path, demonstrate the symptom, then fix it.

## Teaching cautions
- Do not introduce variables, DOM selection, or events in detail today.
- Explain that Console output is for developers and is not visible in the normal page.
- Do not imply JavaScript only runs in browsers; simply focus on browser use for this course.
- Avoid comparing JavaScript with Java; it is not necessary for this lesson.

## Common mistakes
- Incorrect script filename or path.
- Forgetting to save.
- Looking at the wrong DevTools tab.
- Uppercase/lowercase spelling errors.
- Confusing a console message with visible HTML content.

## Support and extension
**Support:** Provide the HTML script line and ask students to create only the JavaScript file.
**Extension:** Ask confident students to print a short sequence of messages and use comments to label each group.

## Checkpoint
Ask each student to open their own page, show the Console, and explain where the output comes from.