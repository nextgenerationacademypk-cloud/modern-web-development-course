# Day 18 Practical Exercises — Flexbox That Adapts

## Exercise 1 — Inspect the flex container (10 min)
Open the example. Identify the parent container and its direct card children.

## Exercise 2 — Turn wrapping on and off (10 min)
1. Find `flex-wrap`.
2. Temporarily set it to `nowrap`.
3. Narrow the viewport and observe.
4. Set it back to `wrap`.

## Exercise 3 — Add flexible card sizing (15 min)
Set each card to:
```css
.card {
  flex: 1 1 220px;
}
```
Resize and observe how many cards fit on each row.

## Exercise 4 — Style the navigation (12 min)
Use Flexbox and `flex-wrap: wrap` for the navigation links. Add a gap.

## Required independent task (15 min)
Create four course cards using a wrapping flex container. Cards should have a minimum comfortable width and should wrap on a narrow viewport.

## Checklist
- [ ] Parent uses `display: flex`.
- [ ] Parent uses `flex-wrap: wrap`.
- [ ] Parent uses `gap`.
- [ ] Cards use flexible sizing.
- [ ] Navigation does not overflow.
- [ ] Page has no horizontal scrolling at 375px.

## Optional challenge
Use `justify-content: space-between` in a header and compare it with `gap`.

## Troubleshooting
Check that flex properties are on the correct element. If items do not wrap, check the parent width and child basis. Save and refresh after CSS edits.