# Day 14 — Flexbox Layout

## Prerequisite
You understand CSS selectors, spacing, and the box model.

## Learning outcomes
Use a parent flex container to control the direction, spacing, alignment, and wrapping of child items.

## 1. What is Flexbox?
Flexbox is a CSS layout method for arranging items in a row or a column. It is useful for navigation links, groups of cards, and simple page sections.

## 2. Parent and children
The element with `display: flex` is the **flex container**. Its direct children become **flex items**.

```css
.card-row {
  display: flex;
  gap: 16px;
}
```

Apply Flexbox to the parent that contains the items you want to arrange.

## 3. Direction
- `flex-direction: row` places items in a row. This is the default.
- `flex-direction: column` places items in a column.

## 4. Space and alignment
- `justify-content` distributes items along the main axis.
- `align-items` aligns items across the cross axis.
- `gap` adds space between flex items.

For a row, the main axis goes left to right and the cross axis goes top to bottom. When direction changes to column, the axes change too.

## 5. Wrapping
By default, flex items try to stay on one line. `flex-wrap: wrap` allows them to move onto another line when there is not enough room.

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

The `flex` shorthand above gives each card a flexible basis. Students can use it as a provided pattern; detailed flex sizing is not required today.

## 6. Common mistakes
- Adding display:flex to each card instead of their parent.
- Expecting justify-content to work when the element is not a flex container.
- Confusing the main axis and cross axis.
- Forgetting gap or using margins inconsistently.
- Forgetting flex-wrap when items need to move to another line.

## Practice
Open the example files. Inspect the header and card-row elements. Change gap, justify-content, and flex-wrap one at a time.

## Recap
Flexbox is applied to a parent. Its direct children become flex items. Use direction, alignment, gap, and wrapping to control their layout.