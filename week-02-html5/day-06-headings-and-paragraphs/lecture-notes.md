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


## 8. How the browser treats headings and paragraphs

HTML elements describe the content. The browser reads the HTML and displays each element using its built-in default style. A heading usually looks larger and bolder than a paragraph, and a paragraph normally starts on a new line.

The blank lines and indentation in your HTML file make the code easier for people to read. They do not create the same spacing on the webpage. The browser generally treats repeated spaces and line breaks in normal text as a single space. Use separate paragraph elements when you want separate paragraphs.

Compare these two ideas:

- One paragraph containing two sentences creates one paragraph block.
- Two separate p elements create two paragraph blocks.

The second choice is easier to read when the ideas are separate.

## 9. Choose a heading level by meaning

Imagine a school website. The page title might be School Information. Under it, major sections could be About the School, Courses, and Contact. A smaller heading under Courses might be Web Development.

The heading levels show the relationship between topics. Do not select h2 or h3 because its default size looks right. Use CSS later if a heading needs a different size.

For this beginner course, use one clear h1 for the main page topic and use h2 and h3 to organise sections. HTML can technically contain more than one h1 in some structures, but a single clear page h1 is a simple and useful habit for these projects.

## 10. Accessibility and readable content

Headings help everyone scan a page. They are especially useful for people who use a screen reader, because assistive technology can move between headings. A good heading describes the section that follows.

Avoid headings such as More or Section 2 when a more descriptive title is possible. Prefer My Education or Our Courses. Keep paragraphs focused on one main idea and use plain, clear sentences.

## 11. Step-by-step planning before you code

Before typing HTML, write a short outline:

1. What is the page about? This becomes the h1.
2. What are the main topics? These become h2 headings.
3. Does any main topic need smaller parts? These may become h3 headings.
4. What information belongs under each heading? Write it as paragraphs.
5. Read only the headings. Do they make sense as an outline?

This planning step prevents a page from becoming one long block of unorganised text.

## 12. Real-world example: a course information page

A course page might have the main heading Web Development Course. Its sections could be What You Will Learn, Class Schedule, and How to Enrol. The paragraphs under each heading explain that topic. This structure helps a visitor find information quickly.

## 13. Extra guided practice

Take this unorganised content and decide which parts should be headings and which should be paragraphs:

- My favourite subject
- I enjoy learning computer skills.
- What I want to learn
- I want to understand how websites work.

A suitable structure is one main h1 called My Learning Profile, followed by two h2 headings called My Favourite Subject and What I Want to Learn. Put the matching sentence in a paragraph under each heading.

## 14. Extra common mistakes

- Using paragraph tags for headings: use h1–h6 when the text introduces a topic.
- Using headings as empty decoration: every heading should introduce real content.
- Using several line breaks to separate ideas: use separate p elements for separate paragraphs.
- Skipping levels without a reason: organise the outline in a logical order.
- Writing vague headings: choose words that tell the visitor what the section contains.
