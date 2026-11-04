# Day 13 — The CSS Box Model

## Lesson purpose
Today you will learn how CSS measures the space around an HTML element. You will use the box model to create a clean information card.

## Prerequisite
You can use selectors, colours, and basic typography in an external stylesheet.

## Learning outcomes
By the end, you can:
- Name the four parts of the box model.
- Explain the difference between padding and margin.
- Set width and max-width.
- Add a border and rounded corners.
- Use box-sizing: border-box.
- Create a centred card with controlled spacing.

## 1. Every element is a box
For layout, the browser treats most HTML elements as rectangular boxes. A paragraph, heading, section, and card all occupy space on the page.

The CSS box model describes four parts of this space. From the centre outward, they are:
1. Content.
2. Padding.
3. Border.
4. Margin.

## 2. Content
Content is the text, image, or other material inside the element. The width and height properties can set the size of the content area, depending on the box-sizing rule.

```css
.card {
  width: 400px;
}
```

A fixed width can be useful for a demonstration, but it may not fit every screen. This week, practise width and max-width. Responsive sizing is developed in Week 4.

## 3. Padding
Padding is the space between the content and the border. It is inside the element's border.

```css
.card {
  padding: 24px;
}
```

If text touches the edge of a card, increase its padding. Padding is part of the element's visible box.

You can also set individual sides:
- `padding-top`
- `padding-right`
- `padding-bottom`
- `padding-left`

For beginners, start with one padding value for all sides.

## 4. Border
The border is the line around the padding and content.

```css
.card {
  border: 1px solid #cbd5e1;
}
```

A border declaration commonly includes width, style, and colour. The style might be solid, dashed, or dotted. Use a simple solid border for this lesson.

The `border-radius` property rounds the corners:

```css
.card {
  border-radius: 12px;
}
```

## 5. Margin
Margin is the space outside the border. It separates one element from nearby elements.

```css
.card {
  margin: 20px;
}
```

You can use `margin: 20px auto;` to add vertical space and centre a block with a defined or maximum width. The left and right auto margins share the available horizontal space.

## 6. Padding and margin are different
Remember:
- Padding creates space inside the border.
- Margin creates space outside the border.

Try changing padding while keeping margin the same. Then change margin while keeping padding the same. Observe which area changes.

## 7. Width and max-width
The `width` property sets a width. The `max-width` property sets an upper limit. A card with max-width can become narrower when its parent has less space.

```css
.course-card {
  max-width: 520px;
  margin: 20px auto;
}
```

This is a useful pattern for a centred card. More complete responsive rules are taught in Week 4.

## 8. box-sizing
By default, CSS width calculations can be confusing because padding and border may be added outside the declared content width. A common beginner-friendly rule is:

```css
* {
  box-sizing: border-box;
}
```

The universal selector * targets all elements. With border-box, the declared width includes the content, padding, and border. This makes card sizing easier to understand.

## 9. Complete card example

```css
* {
  box-sizing: border-box;
}

.course-card {
  max-width: 520px;
  margin: 20px auto;
  padding: 24px;
  border: 1px solid #cbd5e1;
  border-radius: 12px;
  background-color: white;
}
```

Each property has a clear job. Change one value at a time and observe the result.

## 10. Common beginner mistakes
- Confusing padding with margin.
- Forgetting that border adds to the visible box.
- Setting a large fixed width that does not fit the available space.
- Applying margin to the wrong element.
- Expecting border-radius to change the element's size.
- Forgetting to save the stylesheet.

## Guided practice
Open the course-card example. Change padding from 12px to 28px. Then change margin. Observe the difference. Add a second card and create space between the two.

## Recap
The box model is content, padding, border, and margin. Padding is inside the border. Margin is outside the border. Use max-width, auto margins, and border-box to make simple cards easier to size.