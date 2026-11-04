# Day 12 — CSS Selectors, Colours, and Typography

## Lesson purpose
Today you will learn how CSS chooses which HTML elements to style. You will use element, class, and ID selectors and improve the readability of text.

## Prerequisite
You can create an external stylesheet and connect it to an HTML page.

## Learning outcomes
By the end, you can:
- Explain what a CSS selector does.
- Use element, class, and ID selectors.
- Match selector names to HTML tags and attributes.
- Apply colour and typography properties.
- Choose colours and text sizes that are easy to read.

## 1. What is a selector?
A selector tells the browser which HTML element or elements should receive a CSS rule. The selector is the first part of a CSS rule.

```css
p {
  color: #333333;
}
```

This selector targets all paragraph elements on the page.

## 2. Element selectors
An element selector uses the HTML tag name. It applies to every matching element.

```css
h1 {
  color: #174f8a;
}

p {
  line-height: 1.6;
}
```

Use element selectors when you want all headings of a certain level or all paragraphs to share a basic style.

## 3. Class selectors
A class is a label that can be added to one or more HTML elements. In CSS, a class selector begins with a dot.

HTML:

```html
<p class="notice">Bring your practice files.</p>
<p class="notice">Save your work before leaving.</p>
```

CSS:

```css
.notice {
  background-color: #fff0c2;
  padding: 12px;
}
```

Both paragraphs receive the same style. This is useful for cards, notices, buttons, and repeated content.

The class name must match exactly. The HTML uses `class="notice"`; the CSS uses `.notice`. The dot belongs in the CSS selector, not inside the HTML class value.

## 4. ID selectors
An ID is a unique label for one element on a page. An ID selector begins with the hash character.

HTML:

```html
<section id="contact">
  <h2>Contact</h2>
</section>
```

CSS:

```css
#contact {
  border-top: 2px solid #cbd5e1;
}
```

Use IDs when you need to identify a specific section or connect a navigation link to a section. Do not give the same ID to several elements on one page.

## 5. Compare the three selectors

| Selector | CSS example | HTML target |
|---|---|---|
| Element | `p` | Every paragraph |
| Class | `.notice` | Elements with class="notice" |
| ID | `#contact` | The element with id="contact" |

A common beginner error is forgetting the dot or hash. If a class rule does not work, compare the selector and class spelling character by character.

## 6. Text colour and background colour
The `color` property changes text colour. The `background-color` property changes the background behind an element.

```css
body {
  color: #263445;
  background-color: #f3f6fa;
}

.notice {
  color: #4b3700;
  background-color: #fff0c2;
}
```

Colours can be written as names, hexadecimal values, or other supported CSS colour formats. A hexadecimal colour begins with #, such as `#174f8a`. You do not need to memorise colour codes.

Always check contrast. Dark text on a light background is usually easier to read than pale text on a pale background. Do not communicate important information using colour alone.

## 7. Typography properties
Typography means the way text is displayed.

- `font-family`: chooses the typeface.
- `font-size`: sets the size of text.
- `font-weight`: controls how bold text appears.
- `line-height`: controls vertical space between lines.
- `text-align`: aligns text left, centre, right, or justified.
- `text-decoration`: can add or remove text decoration, such as an underline.

Example:

```css
body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
}

h1 {
  font-size: 2rem;
  font-weight: 700;
}

p {
  font-size: 1rem;
}
```

A readable body font size and comfortable line height make paragraphs easier to follow. Headings should look different from normal paragraphs so readers can understand the page structure.

## 8. A first look at the CSS cascade
Sometimes more than one CSS rule can target the same element. CSS uses the cascade, specificity, and source order to decide which declaration applies. This is a larger topic.

For now, avoid writing many competing rules for the same property. Keep your CSS organised and use clear selectors. If a style seems to be ignored, check whether another rule is overriding it.

## 9. Build a small style guide
A style guide page can contain:
- One main heading.
- Two smaller headings.
- A few paragraphs.
- A link.
- A highlighted notice.
- A contact section.

Use element selectors for common text, a class for the notice, and an ID for the contact section.

## 10. Common beginner mistakes
- Forgetting the dot before a class selector.
- Forgetting # before an ID selector.
- Using a class name in CSS that does not match the HTML.
- Reusing an ID on several elements.
- Choosing colours with poor contrast.
- Using too many font sizes and colours.
- Using text-align:center on every paragraph even when it makes reading harder.

## Guided practice
Open the example files. Change the h1 colour, paragraph line-height, and notice background. Save and inspect the browser after each change.

## Recap
Element selectors target HTML tags. Class selectors target reusable class names. ID selectors target one unique element. Colour and typography should improve readability and consistency.