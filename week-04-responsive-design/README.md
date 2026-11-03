# Week 4 — Responsive Web Design

## Goal

Make websites adapt to mobile, tablet, and desktop screens.

## Day-by-day lessons

### Day 16 — Responsive design basics
- Understand screen sizes and why fixed-width pages can be difficult to use.
- Learn the viewport meta element.
- Use Chrome DevTools device mode to inspect layouts.

### Day 17 — Mobile-first CSS and media queries
- Start with a layout that works on a small screen.
- Learn the `@media` rule.
- Change spacing and layout at wider screen sizes.

### Day 18 — Responsive Flexbox
- Use flex-wrap, flexible widths, gap, and alignment.
- Create a navigation and card layout that can wrap.
- Avoid unnecessary fixed widths.

### Day 19 — CSS Grid and images
- Learn a simple CSS Grid layout.
- Use `minmax()` and `auto-fit` in a guided example.
- Make images fit their containers with `max-width: 100%`.

### Day 20 — Responsive landing page
- Combine mobile-first CSS, media queries, Flexbox, and Grid.
- Test at mobile, tablet, and desktop widths.
- Fix overflow and readability problems.

## Example: simple responsive cards

```css
.card-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

@media (min-width: 700px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1000px) {
  .card-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

## Practical exercises

1. Add the viewport meta element.
2. Make images responsive.
3. Build a one-column mobile card layout.
4. Change it to two columns on wider screens.
5. Test the page at three screen widths.

## Homework

Build a responsive landing page for a fictional academy, shop, or service. Include a header, main message, feature cards, and footer.

## Quick review

1. What does responsive design mean?
2. Why is mobile-first useful?
3. What does a media query do?
4. What does `max-width: 100%` help with on images?
5. When might CSS Grid be useful?

## Expected result

A landing page that remains readable and usable on mobile, tablet, and desktop.
