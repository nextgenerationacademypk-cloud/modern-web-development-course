# Day 15 Lecture Notes — Build and Review an Academy Information Website

## 1. What are we building?
This is the Week 3 project. You will combine HTML from Week 2 with CSS from Days 11–14 to create a simple academy information website.

The page should have:
- A header with the academy name.
- A navigation area with links to page sections.
- A welcome section.
- Three course information cards.
- An about or information section.
- A footer.

Use fictional sample information. Do not publish private student contact details.

## 2. Plan before coding
A small plan helps you work in order:
1. List the sections.
2. Choose meaningful HTML elements.
3. Add headings, paragraphs, and links.
4. Add classes to repeated cards.
5. Connect the external stylesheet.
6. Apply colours and typography.
7. Add spacing with the box model.
8. Arrange navigation and cards with Flexbox.
9. Preview and check the page.

## 3. Suggested HTML structure
```html
<header id="top">
  <h1>Next Generation Academy</h1>
  <nav class="main-nav">
    <a href="#home">Home</a>
    <a href="#courses">Courses</a>
    <a href="#about">About</a>
  </nav>
</header>

<main>
  <section id="home">
    <h2>Learn useful skills</h2>
    <p>Start learning step by step.</p>
  </section>

  <section id="courses">
    <h2>Our Courses</h2>
    <div class="course-list">
      <article class="course-card">
        <h3>HTML Basics</h3>
        <p>Learn webpage structure.</p>
      </article>
    </div>
  </section>

  <section id="about">
    <h2>About the Academy</h2>
    <p>We help learners practise useful digital skills.</p>
  </section>
</main>

<footer>
  <p>Learning starts with practice.</p>
</footer>
```
This is a planning example. Add two more course cards and complete the page.

## 4. Reuse CSS classes
Use a class for repeated components:
```css
.course-card {
  padding: 20px;
  border: 1px solid #d5deea;
  background-color: #ffffff;
}
```
All cards with this class receive the same basic style. This makes the design consistent and reduces repeated CSS.

## 5. Use a simple colour palette
Choose two or three main colours:
- One main heading or brand colour.
- One background colour.
- One text colour.

Example:
```css
body { color: #243247; background-color: #f4f7fb; }
h1, h2 { color: #174a7e; }
```
Check that all text is easy to read.

## 6. Use the box model for spacing
```css
.course-card {
  padding: 20px;
  border: 1px solid #d5deea;
  margin: 10px;
}
```
Padding creates room inside a card. Margin separates it from other content.

## 7. Use Flexbox for one-dimensional layout
```css
.course-list {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
.course-card {
  flex: 1 1 220px;
}
```
The parent is the flex container. Its direct children are flex items.

## 8. Check navigation links
A link such as `href="#courses"` should point to an element with `id="courses"`. Check spelling carefully. Each ID on a page should be unique.

## 9. Test your website
- Open the page in Chrome.
- Click each navigation link.
- Check that all sections appear.
- Check that the stylesheet is connected.
- Look for missing images or broken links.
- Resize the browser window and observe the layout. Detailed mobile-first rules and media queries are part of Week 4, so do not worry if the page is not fully responsive yet.
- Save all files before finishing.

## 10. Improve the design carefully
Make one change at a time. Check that the page remains readable. Avoid too many colours, very small text, or unnecessary decoration. A simple and consistent page is better than a crowded page.

## 11. Week 3 recap
You have practised external CSS, selectors, colours, typography, the box model, and Flexbox. The next week will use these foundations to build layouts that adapt to different screen sizes.

## 12. Check your understanding
1. Why do repeated cards use the same class?
2. Which property creates space inside a card?
3. Which property creates space outside its border?
4. Which parent needs `display: flex`?
5. How does an in-page link connect to a section?
