# Day 14 Instructor Guide — Flexbox Basics

## Teaching purpose
Students have learned selectors, typography, and the box model. Introduce Flexbox as a practical way to arrange navigation links and content cards. Keep the lesson to one-dimensional layouts.

## Prepare
- Test the example files.
- Prepare three navigation links and three course cards.
- Display the Flexbox parent/child diagram.
- Have a non-Flexbox version ready for comparison.

## Outcomes
Students identify a flex container and flex items and use `display`, `flex-direction`, `justify-content`, `align-items`, `gap`, and `flex-wrap`.

## 120-minute plan
| Minutes | Activity |
|---:|---|
| 0–20 | Explain why layout is needed; introduce parent/container and child/items |
| 20–24 | Review main axis and cross axis |
| 24–54 | Demonstrate a navigation row, alignment, gap, and wrapping cards |
| 54–116 | Students create a navigation group and course-card layout |
| 116–120 | Students identify container, items, and one alignment property |

## Demonstration sequence
1. Show links stacked vertically in normal document flow.
2. Add `display: flex` to their parent.
3. Change `justify-content` and ask students to observe.
4. Add `align-items: center`.
5. Add `gap` to create consistent spacing.
6. Add `flex-wrap: wrap` to a group of cards.
7. Resize the browser slightly to show wrapping, but explain that detailed responsive design is next week.

## Questions
- Which element is the flex container?
- What are its direct children called?
- What is the default direction?
- What does gap control?
- Why might flex-wrap help a card group?

## Common mistakes
| Mistake | Response |
|---|---|
| Flex applied to child | Apply `display: flex` to the parent |
| Confuses axes | Draw the main and cross axes for the current direction |
| Items have no space | Add `gap` |
| Cards overflow | Demonstrate `flex-wrap` and flexible card basis |
| Expects full responsive site | Explain that Week 4 covers responsive rules |

## Differentiation
Support: provide HTML and ask students to add only Flexbox CSS. Core: create a nav row and three wrapping cards. Extension: change direction to column and compare the axes.

## Checkpoint
Students show one flex container, identify its direct child items, and explain the roles of `justify-content`, `align-items`, and `gap`.
