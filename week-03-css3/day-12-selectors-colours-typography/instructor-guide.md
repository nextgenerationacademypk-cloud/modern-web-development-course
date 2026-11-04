# Day 12 Instructor Guide — Selectors, Colours, and Typography

## Teaching purpose
Students now know how to connect a stylesheet. Teach them to target the correct elements and create readable, consistent text and colour styles.

## Prepare
- Test the example files.
- Prepare HTML containing two course cards, a heading, paragraphs, a notice class, and a unique header ID.
- Display the selector comparison diagram.
- Ask students to open their Day 11 project.

## Outcomes
Students use element, class, and ID selectors; explain the difference; apply colour values; and set font family, size, weight, line height, and alignment.

## 120-minute plan
| Minutes | Activity |
|---:|---|
| 0–20 | Review CSS syntax; explain element, class, and ID selectors |
| 20–24 | Quick selector and colour review |
| 24–54 | Demonstrate selector syntax, colour palette, and typography |
| 54–116 | Students style notices and course cards, then complete independent work |
| 116–120 | Students identify selectors and explain one readability choice |

## Demonstration sequence
1. Show two paragraphs and two cards in HTML.
2. Style all paragraphs with an element selector.
3. Add the same class to two cards and style them with `.course-card`.
4. Add one unique ID to the header and demonstrate `#site-header`.
5. Deliberately remove the dot from a class selector and ask students why it fails.
6. Apply a small palette and typography rules.
7. Compare readable and low-contrast examples.

## Questions
- Which selector can be reused on several elements?
- What symbol begins a class selector?
- What symbol begins an ID selector?
- Which property changes the space between text lines?
- Why should we avoid too many colours?

## Common mistakes
| Mistake | Help |
|---|---|
| Missing dot before class | Compare the CSS selector with the HTML class value |
| Missing hash before ID | Show the ID selector pattern |
| Same ID repeated | Replace repeated IDs with a class |
| Text too small | Compare paragraph text at 16–18px or larger |
| Low contrast | Choose a darker text colour |
| Rule does not apply | Check spelling and whether the class/ID exists in HTML |

## Differentiation
Support: provide HTML with classes already added and ask students to write the CSS. Core: style two cards and a notice. Extension: create a second colour palette and compare readability.

## Checkpoint
Each student demonstrates one element selector, one class selector, one ID selector, and readable typography. Ask the student to explain why a class is appropriate for repeated cards.
