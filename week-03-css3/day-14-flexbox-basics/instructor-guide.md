# Instructor Guide — Day 14: Flexbox Layout

## Preparation
Open the example in VS Code and Chrome. Display the Flexbox parent-and-child diagram.

## Learning outcomes
Students can create a flex container and use gap, direction, alignment, and wrapping.

## 120-minute plan
| Time | Activity |
|---|---|
| 20 min | Explain parent, child, main axis, and cross axis |
| 4 min | Quick oral review |
| 30 min | Demonstrate a navigation row and three cards |
| 62 min | Students build a flex row and complete independent task |
| 4 min | Review layout and ask students to identify the parent |

## Demonstration
1. Show the HTML parent containing three card elements.
2. Add display:flex to the parent.
3. Add gap:16px.
4. Change justify-content between center and space-between.
5. Change align-items and observe the result.
6. Add flex-wrap:wrap.
7. Narrow the browser window and observe wrapping.

## Questions
- Which element is the flex container?
- Which elements are flex items?
- What does gap do?
- What does flex-wrap allow?
- In a row, which direction is the main axis?

## Visual teaching note
Use the diagram to show that Flexbox is applied to the parent, not separately to each child.

## Common mistakes
If Flexbox seems to do nothing, inspect the selected element and confirm it contains the items. Students often select the card instead of the card-row parent.

## Differentiation
Give beginners a parent and three prepared child cards. Faster students can change the direction and compare row and column.

## Checkpoint
Each student shows a navigation row or three-card layout and identifies the flex container and flex items.