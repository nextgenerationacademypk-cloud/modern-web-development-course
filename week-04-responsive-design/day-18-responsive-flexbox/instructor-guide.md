# Day 18 Instructor Guide — Responsive Flexbox

## Purpose
Build on Day 14 Flexbox knowledge and show how wrapping and flexible sizing solve common responsive layout problems.

## Preparation
Open today's example at wide and narrow widths. Display `images/day-18-flex-wrap.svg`. Review `display: flex`, `gap`, and `justify-content`.

## Learning outcomes
Students can use flex-wrap, gap, and flexible card sizing and explain why cards move to a new line.

## 120-minute plan
20 min explanation · 4 min recall · 30 min demonstration · 62 min practical · 4 min review.

## Demo sequence
1. Show cards in a single flex row with no wrap.
2. Narrow the viewport and point out crowding.
3. Add `flex-wrap: wrap`.
4. Add `gap: 16px`.
5. Set `flex: 1 1 220px` on each card.
6. Resize to see natural wrapping.
7. Demonstrate a navigation list with wrapping links.

## Explain
- Flexbox works on the direct children of its container.
- Wrapping is controlled by the parent.
- Flexible basis is a starting size, not a guaranteed final width.
- Do not teach hamburger-menu JavaScript today.

## Common errors
Students apply flex properties to the wrong element, omit display:flex, or use fixed widths that prevent wrapping.

## Support
Give students a parent and three cards with the parent rule partly completed.

## Extension
Ask students to use `align-items` and `justify-content` to improve a header layout.

## Checkpoint
Each student narrows the page and demonstrates that cards wrap without horizontal overflow.