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


## 10. Understand inline elements inside a paragraph

The strong and em elements usually appear inside a paragraph or another text element. They emphasise only the words inside their opening and closing tags. They do not create a new paragraph.

For example, in the sentence "Learning HTML is important", you can wrap only the word important in strong. The rest of the sentence remains normal paragraph text. Use em when you want to emphasise a word or phrase in the way the sentence should be read.

## 11. Understand the parts of a web address

An absolute web address often contains a protocol, a domain name, and a path.

Example: https://developer.mozilla.org/en-US/docs/Web/HTML

- https is the protocol. It tells the browser how to communicate securely with the website.
- developer.mozilla.org is the domain name.
- /en-US/docs/Web/HTML is the path to a particular resource.

When writing a link, include the full address in href. Check that the address is correct and that the website is available.

## 12. More about relative paths

A relative path is read from the location of the current HTML file. Consider this project:

    my-website/
    ├── index.html
    ├── about.html
    └── pages/
        └── courses.html

From index.html, the link to about.html is href="about.html". The link to courses.html is href="pages/courses.html".

From courses.html, a link back to index.html needs to go up one folder. The path is href="../index.html". The ../ part means move up to the parent folder. Draw the folder structure when a relative path is confusing.

## 13. What happens when someone clicks a link?

When a visitor clicks a link, the browser reads the href destination. If it is a web address, the browser requests that resource from the website. If it is a relative path, the browser looks for the matching file in the project. If it is a hash link such as #contact, the browser looks for the matching id in the current page and moves to that location.

A link is not the same as a button. A link navigates to a destination. A button performs an action on the current page, such as submitting a form or running JavaScript. We will practise buttons later in the course.

## 14. Choosing between strong, em, and ordinary text

Use ordinary paragraph text for normal information. Use strong when the importance of the words matters. Use em when the emphasis changes how a sentence should be read.

Do not wrap every sentence in strong or em. If everything is emphasised, nothing stands out. Use these elements only when they add meaning.

## 15. Real-world example: a learning resources page

A training academy website may have links to its course outline, student rules, and external learning resources. The link text should describe each destination, for example Read the HTML course outline rather than Click here. A visitor should understand the purpose of each link without guessing.

## 16. Guided link debugging

If a link does not work, check it in this order:

1. Is the opening a tag present?
2. Is href spelled correctly?
3. Is the destination inside quotation marks?
4. For an external link, does the full URL start with the correct protocol?
5. For a local file, does the file exist at that exact relative path?
6. For a section link, does the target element have the matching id?
7. Is the link text between the opening and closing a tags?

A common error is using href="#courses" while the target has id="course". The values do not match. Correct the spelling so both values are courses.

## 17. Extra common mistakes

- Putting the URL outside href: the destination belongs inside the href attribute.
- Forgetting quotation marks: write href="about.html".
- Using a computer file path as a web URL: relative paths should be based on the project structure.
- Using the same id more than once: each id should be unique on the page.
- Using a vague link label: describe the destination or action.
- Using br for page layout: use paragraphs for separate ideas; CSS will handle spacing and layout.
