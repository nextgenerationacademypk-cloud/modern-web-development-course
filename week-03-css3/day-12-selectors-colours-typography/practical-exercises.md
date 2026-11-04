# Day 12 Practical Exercises — Selectors, Colours, and Typography

## Goal
Style selected elements using element, class, and ID selectors. Make text readable.

## Part A — Open and inspect
1. Open your Day 11 project in VS Code.
2. Open the HTML and CSS files.
3. Identify the heading, paragraphs, and header.

## Part B — Add classes and an ID
Add two course cards to your HTML. Give both cards the class `course-card`. Give the page header the ID `site-header`.

```html
<header id="site-header">
  <h1>Our Academy</h1>
</header>
<article class="course-card">
  <h2>HTML Basics</h2>
  <p>Learn webpage structure.</p>
</article>
<article class="course-card">
  <h2>CSS Basics</h2>
  <p>Learn how to style a page.</p>
</article>
```

## Part C — Style with selectors
Add these rules and save:
```css
body {
  color: #243247;
  background-color: #f4f7fb;
  font-family: Arial, sans-serif;
}
#site-header {
  background-color: #e8f1fb;
}
.course-card {
  background-color: #ffffff;
}
h1, h2 {
  color: #174a7e;
}
p {
  font-size: 18px;
  line-height: 1.6;
}
```

## Part D — Independent task
Create a simple style guide for a fictional academy page:
- Use one element selector.
- Use at least two class selectors.
- Use one ID selector.
- Use two or three main colours.
- Set font family, font size, font weight, and line height.
- Make all text easy to read.

## Checklist
- [ ] Both cards share one class.
- [ ] The header has one unique ID.
- [ ] Class selector begins with a dot.
- [ ] ID selector begins with a hash.
- [ ] Text is readable and has good contrast.
- [ ] CSS changes are visible in Chrome.

## Troubleshooting
Check that the class/ID spelling in HTML matches CSS. Check the dot or hash. Save both files and refresh.

## Optional challenge
Create a `.notice` class for a course announcement and style it with a background colour and bold text.

**Expected result:** A consistent, readable page with reusable CSS classes.
