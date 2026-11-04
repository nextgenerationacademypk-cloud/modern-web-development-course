# Day 26 Instructor Guide — DOM Introduction

## Teaching goal
Students should see the DOM as a bridge between HTML and JavaScript, not as a new programming language.

## Before class
- Test the example in Chrome.
- Open the example folder in VS Code.
- Prepare DevTools Console.
- Draw a small HTML tree on the board.
- Confirm Live Server is available.

## Learning outcomes
Students explain the DOM, select an element by ID or CSS selector, read text, and update text.

## 120-minute plan
| Time | Activity |
|---|---|
| 0–20 min | Explain static HTML versus a page that can respond |
| 20–24 min | Four-minute theory review |
| 24–54 min | Demonstrate DOM tree, document, selectors, textContent |
| 54–116 min | Students complete practical exercises |
| 116–120 min | Review one working student example |

## Demonstration steps
1. Open the HTML and point to the heading, paragraph, and button.
2. Show the same structure in DevTools Elements.
3. In Console, enter document.
4. Run document.getElementById("page-title").
5. Run document.querySelector("p").
6. Read the paragraph's textContent.
7. Change the text from Console.
8. Add the provided button listener to script.js and test it.

## Board visual
Use images/day-26-dom-tree.svg. Explain that it is simplified; students do not need to memorise every node.

## Questions to ask
- What is the difference between an HTML file and the DOM created by the browser?
- Why is an ID useful?
- How are getElementById("notice") and querySelector("#notice") different?
- What might null mean when a selector is used?

## Common problems
- Students use # with getElementById: contrast the two selector styles.
- Students mistype IDs: compare HTML and JS side by side.
- Script does not run: check path, defer, save, refresh, and Console.
- Students confuse changing the browser page with editing the original HTML file: demonstrate refresh.

## Support and extension
- Support: provide HTML with IDs already added; students select and change text.
- Core: select two elements and update one.
- Extension: select an element by class with querySelector() and change its text.

## Checkpoint
Every student shows a selected element in Console and demonstrates a text update. Do not move to complex event handling today.
