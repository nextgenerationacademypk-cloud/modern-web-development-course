# Day 13 — The CSS box model

## Lesson purpose
Explain content, padding, border, and margin from the inside out. Practise width, max-width, padding, border, border-radius, margin, and box-sizing: border-box.

## Prerequisite
Students have completed the Week 2 HTML lessons and can create and preview an HTML page in Chrome.

## Learning outcomes
By the end of this lesson, students can Describe the box model and create a centred card with controlled width, padding, border, and margin.

## Key vocabulary
content, padding, border, margin, width, max-width, box-sizing, border-radius

## 1. HTML and CSS have different jobs
HTML describes content and structure. CSS describes presentation. A heading remains a heading when CSS changes its colour, size, or spacing. CSS does not replace good HTML.

## 2. A CSS rule
A CSS rule has a selector and a declaration block:

```css
h1 {
  color: navy;
  font-size: 32px;
}
```

The selector chooses the element. The braces contain declarations. Each declaration has a property and a value separated by a colon. A semicolon ends the declaration.

## 3. External stylesheet
Keep CSS in a separate file named `style.css`. For this lesson, place it beside `index.html` and add this inside the HTML `head`:

```html
<link rel="stylesheet" href="style.css">
```

The file name and path must match exactly. Save both files and refresh the browser preview.

## 4. Lesson concepts
The box model has four parts from inside to outside: content, padding, border, and margin. Padding is inside the border; margin is outside it. Use box-sizing: border-box so declared widths include padding and border. Try changing one value at a time to see its effect.

## Worked example
Open the files in `examples/`. The HTML links to a separate `style.css`. Change at least two values, save, and observe the result.

## Common mistakes
- The stylesheet name or link path does not match.
- The CSS file was not saved.
- A brace, colon, or semicolon is missing.
- A class selector is missing its leading dot.
- The HTML class and CSS selector do not match.
- Flexbox is applied to the wrong parent element.
- Too many properties are changed at once, making errors hard to find.

## Practice result
A centred academy course card with clear spacing.

## Recap
Explain content, padding, border, and margin from the inside out. Practise width, max-width, padding, border, border-radius, margin, and box-sizing: border-box.
