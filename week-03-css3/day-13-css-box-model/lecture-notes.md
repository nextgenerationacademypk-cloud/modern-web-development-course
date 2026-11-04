# Day 13 Lecture Notes — The CSS Box Model

## 1. Every HTML element is a box
The browser lays out most HTML elements as rectangular boxes. The CSS box model describes the space around an element and the space used by its content.

The four parts are:
1. **Content:** Text, image, or other content inside the element.
2. **Padding:** Space between the content and the border.
3. **Border:** The line around the padding and content.
4. **Margin:** Space outside the border, separating the element from other elements.

Remember the order from inside to outside: content → padding → border → margin.

## 2. Content width and height
`width` and `height` set the size of the content area in the default box model.
```css
.card {
  width: 300px;
  height: 150px;
}
```
A fixed height can cause content to overflow when text grows. For normal content cards, it is often better to let the height grow naturally.

## 3. Padding
Padding adds space inside the border:
```css
.card {
  padding: 20px;
}
```
The content moves away from the border. Padding can be set on each side:
```css
.card {
  padding-top: 10px;
  padding-right: 16px;
  padding-bottom: 10px;
  padding-left: 16px;
}
```
Shorthand:
- `padding: 20px;` all four sides.
- `padding: 10px 20px;` top/bottom 10px, left/right 20px.
- `padding: 10px 15px 20px 25px;` top, right, bottom, left.

## 4. Border
A border appears around the padding and content:
```css
.card {
  border: 1px solid #d5deea;
}
```
The three common parts are width, style, and colour. A border style such as `solid` is needed for a visible border.

## 5. Margin
Margin adds space outside the border:
```css
.card {
  margin: 20px;
}
```
Margin can separate cards or create space around a page section. Margin and padding are not the same: padding is inside the border; margin is outside it.

## 6. Center a block with auto margins
A block with a set maximum width can be centered horizontally:
```css
.card {
  max-width: 600px;
  margin: 20px auto;
}
```
The first value gives top/bottom margin. `auto` shares the remaining horizontal space. The element needs available space and a width or max-width limit to center in this way.

## 7. Box sizing
By default, the declared width is the content width. Padding and border are added outside it. This can make an element wider than expected.

A common project rule is:
```css
* {
  box-sizing: border-box;
}
```
With `border-box`, the declared width includes content, padding, and border. This makes sizing easier to reason about. Teach students to include this rule in their project stylesheet.

## 8. Example card
```css
* {
  box-sizing: border-box;
}
.course-card {
  max-width: 600px;
  padding: 20px;
  border: 1px solid #d5deea;
  margin: 20px auto;
  background-color: white;
}
```

## 9. Common mistakes
- Using margin when the required space is inside the border.
- Using padding when the required space is between separate boxes.
- Forgetting a border style.
- Expecting `margin: auto` to center an element with no width limit.
- Setting a fixed height that cuts off text.
- Forgetting that width behaves differently with `content-box` and `border-box`.

## 10. Inspect the box model
In Chrome, right-click an element and choose Inspect. The Styles and Computed panels can show CSS values and a box-model diagram. Students only need a short guided look today.

## 11. Recap
The box model has content, padding, border, and margin. Padding is inside the border; margin is outside. Use `box-sizing: border-box` for easier sizing and avoid fixed heights for text cards.

## 12. Check your understanding
1. Name the four parts of the box model.
2. Which property creates space inside the border?
3. Which property creates space outside the border?
4. What does `margin: 20px auto` often do when a block has a max-width?
5. Why is `box-sizing: border-box` useful?
