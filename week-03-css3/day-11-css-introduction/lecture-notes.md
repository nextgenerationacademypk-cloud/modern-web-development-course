# Day 11 — CSS purpose and external stylesheets

## Lesson purpose
HTML gives a page structure; CSS controls its presentation. Create style.css, link it from the HTML head, and change background, text colour, font, and spacing.

## Prerequisite
Students have completed the Week 2 HTML lessons and can create and preview an HTML page in Chrome.

## Learning outcomes
By the end of this lesson, students can Create and link an external stylesheet, then apply basic CSS declarations.

## Key vocabulary
CSS rule, selector, declaration, property, value, external stylesheet

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
A selector such as body targets the body element. Common properties include color, background-color, font-family, font-size, margin, and padding. Use readable contrast and make one change at a time.

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
A welcome page styled with an external stylesheet.

## Recap
HTML gives a page structure; CSS controls its presentation. Create style.css, link it from the HTML head, and change background, text colour, font, and spacing.
