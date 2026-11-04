# Day 15 — CSS Integration and Academy Information Website

## Prerequisite
You can link CSS, use selectors, style typography, apply the box model, and create a basic Flexbox layout.

## Learning outcomes
Build one coherent academy information page using this week's CSS foundations.

## 1. Plan the page before styling
A small academy page can contain:
- **Header:** academy name and navigation links.
- **Welcome section:** a main heading and short introduction.
- **Course cards:** repeated blocks of course information.
- **Footer:** short closing information.

The page structure is written in HTML. CSS controls its visual appearance.

## 2. Reuse classes
If three course cards should look similar, give them the same class.

```html
<article class="course-card">...</article>
<article class="course-card">...</article>
<article class="course-card">...</article>
```

One CSS rule can style all three cards.

## 3. Use Flexbox on the parent
Place the cards inside one parent container, then apply Flexbox to that parent.

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

## 4. Keep the design consistent
Choose a small colour palette. Use a limited number of text sizes. Repeat spacing values. Make headings clear and body text easy to read. Use padding inside cards and gap between cards.

## 5. Scope for this week
This is a CSS foundations project, not the responsive-design project. The page should use the browser's current available width and basic Flexbox wrapping. Week 4 will teach mobile-first thinking, viewport behaviour, media queries, responsive navigation, and more deliberate mobile layouts. Do not add JavaScript or Tailwind.

## 6. Test your work
- Confirm the stylesheet link works.
- Check that every section has its expected content.
- Check the navigation links point to existing section IDs.
- Check that the three cards use the same reusable class.
- Check that the page opens in Chrome after saving.

## Common mistakes
- Writing separate card styles when one class can be reused.
- Applying display:flex to the wrong element.
- Forgetting the section ID used by a navigation link.
- Using too many colours or font sizes.
- Spending time on decoration before the content and layout work.

## Recap
A good beginner page has clear structure, readable text, consistent styles, useful spacing, and a layout that is easy to understand.