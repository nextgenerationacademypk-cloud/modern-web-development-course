# Day 15 Practical Exercises — Academy Information Website

## Goal
Build a simple academy information page using HTML and the CSS skills from Week 3.

## Part A — Plan
Draw a simple page with:
- Header and navigation.
- Welcome section.
- Three course cards.
- About section.
- Footer.

## Part B — Create the HTML
Use semantic elements such as `header`, `nav`, `main`, `section`, `article`, and `footer`. Give each section a unique ID so navigation links can target it.

Suggested structure:
```html
<header id="top">
  <h1>Our Academy</h1>
  <nav class="main-nav">
    <a href="#home">Home</a>
    <a href="#courses">Courses</a>
    <a href="#about">About</a>
  </nav>
</header>
<main>
  <section id="home"><h2>Welcome</h2><p>Learn with us.</p></section>
  <section id="courses">
    <h2>Courses</h2>
    <div class="course-list">
      <article class="course-card"><h3>HTML</h3><p>Learn structure.</p></article>
      <article class="course-card"><h3>CSS</h3><p>Learn styling.</p></article>
      <article class="course-card"><h3>JavaScript</h3><p>Learn interaction.</p></article>
    </div>
  </section>
  <section id="about"><h2>About</h2><p>We support practical learning.</p></section>
</main>
<footer><p>Keep practising.</p></footer>
```

## Part C — Connect and style
Create or update `styles.css`. Include:
- External stylesheet link.
- Body font and text colour.
- Heading colour.
- Reusable `.course-card` class.
- Padding, border, and margin.
- Flexbox for navigation or course cards.
- A small, readable colour palette.

## Part D — Test
1. Save both files.
2. Open the page in Chrome.
3. Click each navigation link.
4. Confirm the stylesheet works.
5. Check that all three cards appear.
6. Resize the browser and observe the layout. Full responsive design comes in Week 4.

## Required checklist
- [ ] Header and navigation.
- [ ] Welcome section.
- [ ] Three course cards.
- [ ] About section.
- [ ] Footer.
- [ ] Working in-page links.
- [ ] External stylesheet.
- [ ] Consistent selectors and colours.
- [ ] Readable typography.
- [ ] Box-model spacing.
- [ ] Flexbox layout.

## Optional challenge
Add a CSS hover style to links or cards. Keep the effect simple and ensure the text remains readable.

**Expected result:** A clear academy information website built with HTML and traditional CSS.
