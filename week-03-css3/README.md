# Week 3 — CSS3 Foundations

## Goal

Style HTML pages and understand the basic CSS layout model.

## Day-by-day lessons

### Day 11 — What is CSS?
- Understand the difference between HTML and CSS.
- Create an external file named `style.css`.
- Connect it with a `link` element in the HTML head.
- Change page background and text colour.

### Day 12 — Selectors and typography
- Learn element, class, and ID selectors.
- Practise colour, font family, font size, font weight, and text alignment.
- Practical: create a consistent heading and paragraph style.

### Day 13 — The box model
- Learn content, padding, border, and margin.
- Use width, max-width, border-radius, and box-sizing.
- Practical: style profile and information cards.

### Day 14 — Flexbox
- Learn display flex, gap, justify-content, align-items, and flex-wrap.
- Build a simple navigation row and card layout.
- Practise alignment and spacing.

### Day 15 — CSS project and review
- Combine selectors, typography, box model, and Flexbox.
- Build an academy information website with a header, course cards, and footer.

## Example: connecting CSS

HTML:

```html
<link rel="stylesheet" href="style.css">
```

CSS:

```css
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  color: #222;
  background: #f5f7fa;
}

.card {
  max-width: 600px;
  margin: 24px auto;
  padding: 24px;
  background: white;
  border-radius: 12px;
}
```

## Practical exercises

1. Connect an external stylesheet.
2. Create three class selectors.
3. Style headings, paragraphs, and links.
4. Make a card using padding, margin, border, and border-radius.
5. Use Flexbox to align cards or navigation links.

## Homework

Style your Week 2 profile page. Use a consistent colour palette, readable fonts, spacing, and at least two cards.

## Quick review

1. What is the job of CSS?
2. How do you connect an external CSS file?
3. What is the difference between margin and padding?
4. What does a class selector look like?
5. Name two Flexbox properties.

## Expected result

A clean academy information website with a consistent visual style and basic Flexbox layout.
