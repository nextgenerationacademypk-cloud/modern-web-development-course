# Day 11 — What Is CSS?

## Lesson purpose
Today you will learn how CSS changes the appearance of an HTML page. You will create a separate stylesheet, connect it to HTML, and make your first design changes.

## Prerequisite
You can create an HTML file, add a heading and paragraph, save it, and open it in Chrome.

## Learning outcomes
By the end of this lesson, you can:
- Explain the different jobs of HTML and CSS.
- Describe a CSS rule.
- Create an external file named style.css.
- Connect the stylesheet to an HTML page.
- Change text colour, background colour, font, and spacing.

## 1. Why do websites need CSS?
A webpage contains information. HTML describes what the information is: a heading, paragraph, link, image, list, or section. CSS describes how that information looks: colour, size, spacing, borders, and layout.

Think of a printed school notice. HTML is like deciding which words are the title and which words are the details. CSS is like choosing the title colour, font size, margins, and page arrangement.

A page can work without CSS, but it may look plain. CSS helps make a page easier to read and more consistent.

## 2. HTML and CSS work together
A browser reads the HTML document and the linked CSS file. It combines the structure and styles to display the page.

Keep these jobs separate:
- HTML: content and meaning.
- CSS: visual presentation.
- Browser: reads the files and displays the result.

Changing a heading's colour does not change its HTML meaning. It is still a heading.

## 3. What is a CSS rule?
A CSS rule has a selector and a declaration block.

```css
h1 {
  color: navy;
  font-size: 32px;
}
```

- `h1` is the selector. It chooses the HTML heading elements.
- The opening and closing braces contain declarations.
- `color` and `font-size` are properties.
- `navy` and `32px` are values.
- A colon separates each property from its value.
- A semicolon ends a declaration.

CSS property names use hyphens when needed, such as `background-color` and `font-family`.

## 4. Create an external stylesheet
An external stylesheet is a separate file that contains CSS rules. It is usually easier to manage than writing all CSS inside every HTML page.

Create a project folder with these files:

```text
my-first-website/
├── index.html
└── style.css
```

The spelling of the file name matters. The file must be saved in the location used by the HTML link.

## 5. Connect the CSS file
Open `index.html`. Inside the `head` element, add:

```html
<link rel="stylesheet" href="style.css">
```

The `link` element connects another file to the HTML document. The `rel` attribute tells the browser that the linked file is a stylesheet. The `href` attribute gives the file path.

Because both files are in the same folder, `style.css` is enough for the path. If you move the CSS file into another folder, the path must change too.

## 6. Your first CSS properties
Try these properties one at a time:

- `color`: changes the text colour.
- `background-color`: changes the background behind an element.
- `font-family`: chooses the font.
- `font-size`: changes the size of text.
- `margin`: creates space outside an element.
- `padding`: creates space inside an element.

Example:

```css
body {
  font-family: Arial, sans-serif;
  color: #243247;
  background-color: #eef3f8;
}

h1 {
  color: #1756a9;
}
```

The `body` rule affects the main page area. The `h1` rule affects heading elements.

## 7. Save and preview
1. Save `index.html`.
2. Save `style.css`.
3. Open the HTML page in Chrome or use Live Server.
4. Look at the result.
5. Change one CSS value.
6. Save again and check the browser.

If you do not see a change, do not immediately rewrite the whole file. Check the link, file name, selector, spelling, and save state.

## 8. Common beginner errors
- The file is named `styles.css` but the link says `style.css`.
- The stylesheet is in another folder but the path was not updated.
- The `link` element is placed in the wrong part of the document.
- A brace or semicolon is missing.
- The CSS file was edited but not saved.
- Students expect CSS to change the content rather than its appearance.

## 9. A good first design
Choose two or three colours. Make the heading easy to notice. Use a readable font. Do not use many different colours or font sizes. A simple page with clear text is better than a page with many decorations.

## Guided practice
Use the example files in this folder. Change the body background, heading colour, and paragraph font. Make one change at a time and check the browser.

## Recap
HTML describes page structure. CSS controls presentation. An external stylesheet is connected with a link element in the HTML head. Save both files and preview the result in the browser.