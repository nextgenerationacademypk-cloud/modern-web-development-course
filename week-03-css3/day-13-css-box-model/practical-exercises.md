# Day 13 Practical Exercises — Build a Centered Information Card

## Goal
Use the CSS box model to control the size and spacing of a card.

## Part A — Start
1. Open the Day 12 project in VS Code.
2. Add one `article` with class `course-card`.
3. Put a heading and a paragraph inside it.

## Part B — Add the box model
Add this to your CSS:
```css
* {
  box-sizing: border-box;
}
.course-card {
  max-width: 600px;
  padding: 20px;
  border: 1px solid #d5deea;
  margin: 20px auto;
  background-color: #ffffff;
}
```
Save and preview in Chrome.

## Part C — Experiment
Change one value at a time:
1. Change padding from 20px to 8px. Observe the content.
2. Change the border colour.
3. Change margin from 20px to 40px.
4. Change max-width from 600px to 400px.
5. Restore values that make the card readable.

## Part D — Independent task
Create two academy course cards. Each card must have:
- a heading and paragraph,
- padding,
- a visible border,
- margin separating it from other content,
- a sensible maximum width,
- a light background.

## Checklist
- [ ] I can identify the content.
- [ ] Padding creates space inside the border.
- [ ] Border is visible.
- [ ] Margin separates the card from other content.
- [ ] The card is centered.
- [ ] Text is not cut off.

## Troubleshooting
If the border is missing, check `border-style`. If the card does not center, check max-width and margin. If text is cut off, remove fixed height.

## Optional challenge
Add a second class called `featured-card` and give one card a different border colour.

**Expected result:** One or more readable, centered information cards.
