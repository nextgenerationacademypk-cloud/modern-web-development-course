# Day 7 Lecture Notes — Text Formatting and Links

## Learning goal

Use meaningful text emphasis and create links that help visitors move to useful pages or sections.

## 1. Why do we sometimes emphasise text?

Some words are especially important. HTML provides elements that communicate emphasis or importance.

### The strong element

Use `<strong>` when the text is important.

```html
<p><strong>Important:</strong> Save your work before closing VS Code.</p>
```

Browsers usually show strong text in bold. Its meaning is more important than its default appearance.

### The em element

Use `<em>` when you want to emphasise a word or phrase.

```html
<p>You should <em>always</em> check your links.</p>
```

Browsers usually show em text in italics.

Do not use strong and em just to make text look bold or italic. Later, CSS will let you control appearance without changing the meaning of your content.

## 2. Line breaks

The `<br>` element creates a line break inside text. It does not need a closing tag.

```html
<p>
  Next Generation Academy<br>
  Seni Gumbat, Kohat
</p>
```

Use br only when a line break is part of the content, such as an address or a poem. Do not add many br elements to create space between sections. Use paragraphs for separate ideas and CSS for layout spacing.

## 3. What is a hyperlink?

A hyperlink lets a visitor open another webpage, file, or location on the same page. We create a link with the anchor element, written as `<a>`.

The `href` attribute tells the browser where the link should go.

```html
<a href="https://developer.mozilla.org/">Visit MDN</a>
```

- `a` is the anchor element.
- `href` is the destination attribute.
- `Visit MDN` is the visible link text.

The words between the opening and closing a tags become clickable.

## 4. Absolute URLs and relative paths

An **absolute URL** gives the full web address of another website.

```html
<a href="https://www.w3schools.com/html/">Learn HTML on W3Schools</a>
```

A **relative path** points to a file or page using its location in your own project.

Suppose your project has this structure:

```text
my-website/
├── index.html
└── about.html
```

From index.html, this link opens about.html:

```html
<a href="about.html">About Me</a>
```

If you later put a page in a folder, the path must include that folder. File and folder names must match exactly.

## 5. Link to a section on the same page

You can give an element an `id`. An id identifies that element on the page.

```html
<a href="#contact">Go to Contact</a>

<h2 id="contact">Contact</h2>
<p>This is the contact section.</p>
```

The hash symbol in `#contact` tells the browser to find the element whose id is contact. The value in href must match the id exactly.

An id should be unique on the page. Do not give the same id to several different elements.

## 6. Opening an external link in a new tab

The `target="_blank"` attribute asks the browser to open the destination in a new tab.

```html
<a href="https://developer.mozilla.org/"
   target="_blank"
   rel="noopener">
  Read the MDN documentation
</a>
```

For beginner projects, use rel="noopener" with target="_blank". It is a good security habit. Do not open every link in a new tab; use it only when it helps the visitor.

## 7. Write useful link text

A visitor should understand a link before clicking it.

Good example:

```html
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
  Read the MDN HTML guide
</a>
```

Weak example:

```html
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
  Click here
</a>
```

Descriptive link text is easier to understand, including for people who use screen readers.

## 8. Complete example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Learning Links</title>
</head>
<body>
  <h1>My Learning Links</h1>

  <p>I am <strong>learning HTML</strong> and practising every day.</p>
  <p><em>Small steps help me improve.</em></p>

  <h2>Useful Resources</h2>
  <ul>
    <li>
      <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
        Read the MDN HTML guide
      </a>
    </li>
    <li>
      <a href="https://www.w3schools.com/html/">
        Practise HTML on W3Schools
      </a>
    </li>
  </ul>

  <p><a href="#contact">Go to the contact section</a></p>

  <h2 id="contact">Contact</h2>
  <p>This is a practice page. Do not publish private contact details.</p>
</body>
</html>
```

## 9. Common link problems

| Problem | What to check |
|---|---|
| Link does not open | Check the spelling of the URL and the href value |
| Local page is missing | Check the relative path and file name |
| Section link does nothing | Check that href="#name" matches id="name" |
| Link text is unclear | Replace vague words with a description of the destination |
| New tab is not opening | Check that target="_blank" is written correctly |

## Key words

| Word | Simple meaning |
|---|---|
| Emphasis | Giving a word or phrase special importance |
| Hyperlink | A clickable connection to another location |
| Anchor | The HTML element used to create a link |
| href | The link destination attribute |
| Absolute URL | A complete web address |
| Relative path | A path to a file inside your project |
| id | A unique name for an element on the page |

## Quick self-check

1. What does the href attribute do?
2. What is the difference between strong and em?
3. What is the difference between an absolute URL and a relative path?
4. How do you link to an element with id="about"?
5. Why is descriptive link text better than "click here"?

## Remember

A good link tells visitors where it will take them. Check every link in the browser, and make sure local file paths match your project folders.
