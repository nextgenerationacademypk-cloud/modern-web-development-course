# Week 2 — HTML5 Page Structure

## Goal

Use common HTML elements to create a well-organised page.

## Day-by-day lessons

### Day 6 — Headings and paragraphs
- Use `h1` to `h6` for headings.
- Use `p` for paragraphs.
- Understand why heading order matters.
- Practical: write an About Me page.

### Day 7 — Text, links, and images
- Use `strong`, `em`, and other basic text elements.
- Create links with `a` and the `href` attribute.
- Add images with `img`, `src`, and useful `alt` text.
- Practical: create a page with links and an image.

### Day 8 — Lists and tables
- Create ordered and unordered lists.
- Use list items.
- Build a simple table with rows and header cells.
- Practical: make a weekly study timetable.

### Day 9 — Forms
- Learn `form`, `label`, `input`, `textarea`, and `button`.
- Connect labels to inputs.
- Explore text, email, and submit input types.
- Practical: build a contact form. It does not need to send data to a server.

### Day 10 — Semantic HTML and review
- Learn `header`, `nav`, `main`, `section`, `article`, and `footer`.
- Understand why meaningful page structure helps people and browsers.
- Review and complete a profile page.

## Example: semantic page structure

```html
<header>
  <h1>My Profile</h1>
  <nav>
    <a href="#about">About</a>
    <a href="#interests">Interests</a>
  </nav>
</header>

<main>
  <section id="about">
    <h2>About Me</h2>
    <p>I am learning HTML.</p>
  </section>
  <section id="interests">
    <h2>My Interests</h2>
    <ul>
      <li>Reading</li>
      <li>Technology</li>
    </ul>
  </section>
</main>

<footer>
  <p>My practice website</p>
</footer>
```

## Practical exercises

1. Add at least three sections to a page.
2. Add a working link to another page or website.
3. Add an image with suitable alternative text.
4. Add a list and a simple table.
5. Build a contact form with labels.

## Homework

Finish a personal profile website with About, Interests, Education or Skills, and Contact sections.

## Quick review

1. What is the difference between an ordered and unordered list?
2. What does the `href` attribute do?
3. Why should an image have useful `alt` text?
4. What is a semantic HTML element?
5. Why should every form input have a label?

## Expected result

A structured profile page using headings, text, links, images, lists, tables, forms, and semantic elements.
