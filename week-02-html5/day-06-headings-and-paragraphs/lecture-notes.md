# Day 6 Lecture Notes — Headings and Paragraphs

## Learning goal

Create readable webpage content by using headings and paragraphs in a clear order.

## 1. What are headings?

A heading describes the topic of a page or a part of a page. HTML provides six heading levels:

- `<h1>` — the main heading of the page.
- `<h2>` — a major section heading.
- `<h3>` — a heading inside an h2 section.
- `<h4>` — a heading inside an h3 section.
- `<h5>` — a heading inside an h4 section.
- `<h6>` — the lowest heading level.

Example:

```html
<h1>My Profile</h1>

<h2>About Me</h2>
<p>My name is Ali. I am learning web development.</p>

<h2>My Education</h2>
<p>I enjoy learning new computer skills.</p>

<h3>What I Am Learning Now</h3>
<p>I am practising HTML.</p>
```

The browser displays headings in different default sizes and weights. Do not choose a heading only because you want large or small text. A heading level describes the structure of the information. We will learn to control appearance with CSS in Week 3.

## 2. What is a paragraph?

A paragraph is a group of related sentences. Use the `<p>` element for normal blocks of text.

```html
<p>HTML is used to structure webpage content.</p>
<p>CSS is used to control how a webpage looks.</p>
```

Each paragraph starts on a new block in the browser. You do not need to type extra spaces to create a new paragraph.

## 3. Plan the heading order

Think of a webpage like an outline in a book. The page has a main topic, then sections, and sometimes smaller topics inside a section.

```html
<h1>My Learning Journal</h1>

<h2>HTML</h2>
<p>I am learning how to structure a page.</p>

<h2>My Practice</h2>
<h3>What I Built</h3>
<p>I created a simple profile page.</p>
<h3>What I Need to Improve</h3>
<p>I need more practice with links and images.</p>
```

In this example, both h3 headings belong under the My Practice section. Do not jump between heading levels just to change text size. A logical order helps readers, screen-reader users, and search engines understand the page.

## 4. The page title is not the same as the h1

The `<title>` element is written inside the document `<head>`. It usually appears in the browser tab and helps identify the page.

The `<h1>` element is written inside the `<body>`. It is the main visible heading on the page.

```html
<head>
  <title>Ali's Learning Journal</title>
</head>
<body>
  <h1>My Learning Journal</h1>
</body>
```

These two texts can be similar, but they have different jobs.

## 5. A complete example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Profile</title>
</head>
<body>
  <h1>My Profile</h1>

  <h2>Introduction</h2>
  <p>Hello! I am a beginner web developer.</p>
  <p>I am learning how websites are created.</p>

  <h2>My Goals</h2>
  <p>I want to become confident with HTML, CSS, and JavaScript.</p>
</body>
</html>
```

Notice that the h1 appears once at the top of this simple page. The two h2 elements introduce the main sections. Each paragraph contains information about its section.

## 6. Common mistakes and how to fix them

| Mistake | Why it is a problem | Better approach |
|---|---|---|
| Using h1, then h4 just to make text smaller | The outline skips levels without a reason | Use h2 for a main section, then h3 for a subsection |
| Using a heading only to make text bold | The element gives the text a heading meaning | Use a paragraph; CSS can style it later |
| Putting all text in one paragraph | The content becomes difficult to scan | Divide related ideas into paragraphs |
| Confusing title and h1 | They appear in different places and serve different purposes | Put title in head and h1 in body |
| Forgetting a closing p tag | The document structure may not be what you intended | Write and check both tags |

## 7. Practise in VS Code

1. Open your Week 2 project folder.
2. Open `index.html`.
3. Write one h1 for your page.
4. Add three h2 sections.
5. Write one or two paragraphs in each section.
6. Add an h3 only if a section needs a smaller subsection.
7. Save the file and preview it in Chrome.
8. Read the page from top to bottom and check whether the order makes sense.

## Key words

| Word | Simple meaning |
|---|---|
| Heading | A title for a page or section |
| Heading level | The place of a heading in the page outline |
| Paragraph | A block of related sentences |
| Page title | The text shown in the browser tab |
| Content structure | The way information is organised |

## Quick self-check

1. What is the difference between h1 and h2?
2. Which element creates a paragraph?
3. Where is the title element written?
4. Why should heading levels follow a logical order?
5. Should you use h4 only because you want smaller text?

## Remember

Use headings to organise information, not to decorate it. Use paragraphs for normal text. A reader should be able to understand your page outline by looking at its headings.
