# Day 14 — Flexbox Layout

## Lesson purpose
Today you will learn how to arrange groups of elements using Flexbox. You will use it for navigation links and course cards.

## Prerequisite
You understand CSS selectors, the box model, and basic spacing.

## Learning outcomes
By the end, you can:
- Explain the difference between a flex container and flex items.
- Apply display:flex to a parent.
- Change the direction of items.
- Use justify-content, align-items, and gap.
- Allow items to wrap onto another line.

## 1. Why do we need layout tools?
HTML elements normally appear in the browser in the order they are written. CSS layout tools help place related elements in a useful arrangement. Flexbox is designed for arranging items in one direction at a time: a row or a column.

Common uses include:
- Navigation links in a header.
- Course cards in a row.
- Buttons placed beside each other.
- Simple groups of information.

## 2. Flex container and flex items
Flexbox begins with a parent element. When you give that parent `display: flex`, its direct children become flex items.

```html
<section class="card-row">
  <article class="card">HTML</article>
  <article class="card">CSS</article>
  <article class="card">JavaScript</article>
</section>
```

```css
.card-row {
  display: flex;
}
```

The section is the flex container. The three article elements are flex items.

A common mistake is applying display:flex to each card. If you want to arrange the cards as a group, apply it to their shared parent.

## 3. Direction
The `flex-direction` property controls the direction of the items.

- `row`: items are placed in a row. This is the default.
- `column`: items are placed in a column.

```css
.card-row {
  display: flex;
  flex-direction: row;
}
```

Change row to column and observe the difference.

## 4. Main axis and cross axis
Flexbox uses two axes:
- The **main axis** follows the direction of the items.
- The **cross axis** runs across the main axis.

For a row, the main axis runs horizontally and the cross axis runs vertically. For a column, these directions change.

You do not need to memorise advanced axis rules today. Remember that justify-content works along the main axis and align-items works across the cross axis.

## 5. justify-content
The `justify-content` property controls how items are distributed along the main axis.

Common values:
- `flex-start`: items gather at the start.
- `center`: items gather in the centre.
- `flex-end`: items gather at the end.
- `space-between`: space is placed between items.

Try one value at a time and observe the row.

## 6. align-items
The `align-items` property aligns items across the cross axis. Common values include `stretch`, `center`, `flex-start`, and `flex-end`.

For a row, align-items can move items vertically within the available cross-axis space. The result depends on the size of the container and the items.

## 7. gap
The `gap` property adds space between flex items.

```css
.card-row {
  display: flex;
  gap: 18px;
}
```

Gap is often easier to manage than adding margins to every child card.

## 8. flex-wrap
Flex items may try to stay on one line. When there is not enough room, items can become squeezed or overflow. The rule `flex-wrap: wrap` allows items to move onto another line.

```css
.card-row {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
}

.card {
  flex: 1 1 220px;
}
```

The flex shorthand sets how an item can grow, shrink, and its starting size. For this beginner lesson, use the provided pattern. Detailed flex sizing is not required.

Flex wrapping is useful, but it is not the complete responsive-design topic. Week 4 will teach mobile-first design and media queries.

## 9. A navigation example
A navigation element can contain several links. Apply display:flex to the nav element and gap to create space between links.

```css
.navigation {
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
}
```

## 10. Common beginner mistakes
- Selecting the wrong parent.
- Forgetting display:flex.
- Expecting justify-content to work on a normal block element.
- Confusing justify-content and align-items.
- Forgetting gap.
- Forgetting flex-wrap when items need to move to another line.

## Guided practice
Open the example files. Inspect the header and card-row. Change gap, justify-content, and flex-wrap one at a time. Narrow the browser window and observe the result.

## Recap
Flexbox is applied to a parent. Its direct children become flex items. Use direction, alignment, gap, and wrapping to control the group.