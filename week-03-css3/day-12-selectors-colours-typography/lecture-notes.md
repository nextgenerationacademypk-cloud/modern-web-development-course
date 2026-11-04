# Day 12 — Selectors, colours, and typography

## Lesson purpose
Teach element, class, and ID selectors. Practise colour, background-color, font-family, font-size, font-weight, line-height, and text-align. Use a small consistent colour palette.

## Prerequisite
Students have completed the Week 2 HTML lessons and can create and preview an HTML page in Chrome.

## Learning outcomes
By the end of this lesson, students can Choose a matching selector and style headings, paragraphs, links, and a highlighted notice.

## Key vocabulary
element selector, class selector, ID selector, hex colour, font family, font size, line height, text alignment

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
Element selectors use a tag name, such as p. Class selectors begin with a dot, such as .notice, and can be reused. ID selectors begin with #, such as #contact, and should identify one unique element. Hex colours begin with #, for example #174f8a. Choose readable font sizes and comfortable line height.

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
A simple style guide with consistent headings, paragraphs, links, and a notice.

## Recap
Teach element, class, and ID selectors. Practise colour, background-color, font-family, font-size, font-weight, line-height, and text-align. Use a small consistent colour palette.
