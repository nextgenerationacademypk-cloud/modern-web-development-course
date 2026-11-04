# Day 15 — CSS Integration: Academy Information Website

## Lesson purpose
Today you will combine the CSS skills from this week in one small website. The goal is to practise a complete workflow, not to learn many new properties.

## Prerequisite
You can connect an external stylesheet, use selectors, style typography, apply the box model, and create a basic Flexbox layout.

## Learning outcomes
By the end, you can:
- Identify the main sections of a simple academy website.
- Reuse a class to style repeated course cards.
- Use spacing and typography consistently.
- Use Flexbox to arrange course cards.
- Test the page and explain your CSS choices.

## 1. Plan before coding
A website is easier to build when you know which sections it needs. Today's page contains:
1. Header and navigation.
2. Welcome section.
3. About section.
4. Course cards.
5. Footer.

The HTML creates the sections and content. The CSS controls their appearance.

## 2. Header and navigation
The header identifies the academy. A navigation element contains links to sections of the same page.

```html
<header class="site-header">
  <a class="brand" href="#home">Next Generation Academy</a>
  <nav class="navigation" aria-label="Main navigation">
    <a href="#home">Home</a>
    <a href="#courses">Courses</a>
    <a href="#about">About</a>
  </nav>
</header>
```

Each link uses a fragment such as `#courses`. The page needs an element with the matching ID, such as `id="courses"`.

## 3. Welcome section
The welcome section should tell visitors what the academy offers. Use one clear main heading and a short paragraph. Do not write a very long block of text.

A class such as `hero` can be used to style the section's background, padding, and text colour.

## 4. Reusable course cards
Each course card contains a title and a short description. Give all cards the same class.

```html
<article class="course-card">
  <h3>Web Development</h3>
  <p>Learn HTML, CSS, and JavaScript foundations.</p>
</article>
```

Repeat the article for the other courses. A single `.course-card` CSS rule can style every card. Reusing a class saves time and keeps the design consistent.

## 5. Arrange cards with Flexbox
Put the cards inside a parent container.

```html
<div class="course-list">
  <!-- course cards go here -->
</div>
```

Apply Flexbox to the parent:

```css
.course-list {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
}

.course-card {
  flex: 1 1 220px;
  padding: 20px;
}
```

The parent arranges the cards. The cards receive their own spacing and appearance.

## 6. Use the box model
Cards need space around their content. Padding creates space inside the card. A border gives the card a visible edge. Border-radius rounds the corners. Gap creates space between cards. Margin can separate whole sections.

Do not add spacing randomly. Use a small set of repeated values so the page feels consistent.

## 7. Choose a small design system
A simple page can use:
- One main dark colour for the header and footer.
- One accent colour for headings or buttons.
- A light page background.
- White card backgrounds.
- One readable font family.
- Two or three text sizes.

The goal is consistency and readability, not decoration.

## 8. Check the page
Before you finish:
- Does the stylesheet link point to the correct file?
- Does the page open in Chrome?
- Do the navigation links point to existing IDs?
- Do all three cards use the same class?
- Is Flexbox applied to the parent of the cards?
- Is the text readable?
- Does the footer appear after the main content?

## 9. Scope boundary
This is a CSS foundations project. It does not require JavaScript, Tailwind, CSS Grid, or advanced responsive rules. Week 4 is dedicated to responsive design, mobile-first layouts, media queries, responsive images, and more deliberate mobile navigation.

## 10. Common mistakes
- Spending too much time choosing colours before the layout works.
- Repeating a separate CSS rule for every card.
- Applying Flexbox to the wrong element.
- Forgetting the ID used by a navigation link.
- Using too many font sizes and colours.
- Adding features that have not been taught yet.

## Guided practice
Open the supplied HTML and CSS files. Follow the project steps in the practical exercise. Change one CSS rule at a time and compare the result in Chrome.

## Recap
A clear beginner website has meaningful HTML sections, readable text, consistent colours, reusable classes, useful spacing, and a simple layout. You now have the CSS foundations needed to begin responsive design next week.