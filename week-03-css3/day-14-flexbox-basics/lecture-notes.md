# Day 14 Lecture Notes — Flexbox Basics

## 1. What is Flexbox?
Flexbox is a CSS layout system that helps arrange items in a row or column. It is useful for navigation links, groups of cards, and simple page sections.

Flexbox works with:
- A **flex container**: the parent element that receives `display: flex`.
- **Flex items**: the direct children of that container.

## 2. Turn on Flexbox
HTML:
```html
<nav class="main-nav">
  <a href="#home">Home</a>
  <a href="#courses">Courses</a>
  <a href="#contact">Contact</a>
</nav>
```
CSS:
```css
.main-nav {
  display: flex;
}
```
The direct child links become flex items and are placed in a row by default.

## 3. Main axis and cross axis
With the default `flex-direction: row`, the main axis runs horizontally and the cross axis runs vertically.

If `flex-direction: column`, the main axis becomes vertical and the cross axis becomes horizontal.

## 4. flex-direction
Choose the direction of items:
```css
.row {
  display: flex;
  flex-direction: row;
}
.column {
  display: flex;
  flex-direction: column;
}
```
The default is `row`.

## 5. justify-content
`justify-content` distributes items along the main axis:
```css
.nav {
  display: flex;
  justify-content: space-between;
}
```
Common values:
- `flex-start`: items at the start.
- `center`: items grouped at the center.
- `flex-end`: items at the end.
- `space-between`: equal space between items.
- `space-around`: space around each item.
- `space-evenly`: equal gaps between and around items.

## 6. align-items
`align-items` aligns items along the cross axis:
```css
.nav {
  display: flex;
  align-items: center;
}
```
Common values include `stretch`, `flex-start`, `center`, and `flex-end`. The effect depends on the direction and available space.

## 7. gap
The `gap` property adds space between flex items:
```css
.course-list {
  display: flex;
  gap: 20px;
}
```
It is usually easier to control a group of items with `gap` than to add margin to every item.

## 8. flex-wrap
By default, flex items try to stay on one line. `flex-wrap: wrap` allows them to move onto another line when there is not enough space:
```css
.course-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.course-card {
  flex: 1 1 220px;
}
```
This is a first introduction to flexible layout behaviour. Full mobile-first responsive design and media queries are taught in Week 4.

## 9. A simple navigation layout
```css
.main-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}
```
This can place a site name at one side and navigation links at the other when the HTML is structured accordingly.

## 10. A group of cards
```css
.course-list {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
.course-card {
  flex: 1 1 220px;
  padding: 18px;
  border: 1px solid #d5deea;
}
```
The `flex` shorthand controls how an item can grow, shrink, and its starting basis. For now, understand that `1 1 220px` gives each card a preferred starting size and allows it to share available space and wrap.

## 11. Flexbox is not a replacement for every layout
Use Flexbox when items are arranged mainly in one direction: a row or a column. Later you will learn CSS Grid for layouts with rows and columns together. Do not use Flexbox just because it is new.

## 12. Common mistakes
- Adding `display: flex` to the child instead of the parent.
- Thinking `justify-content` and `align-items` always mean horizontal and vertical; their directions depend on `flex-direction`.
- Forgetting `flex-wrap: wrap` when items need to move to another line.
- Expecting gap to add space around the outside of the whole container.
- Using fixed widths that make cards too wide for the available space.

## 13. Recap
Set `display: flex` on the parent. Use `flex-direction` to choose row or column, `justify-content` for the main axis, `align-items` for the cross axis, `gap` for spaces between items, and `flex-wrap` to allow another line.

## 14. Check your understanding
1. Which element becomes the flex container?
2. What is the default flex direction?
3. Which property distributes items on the main axis?
4. Which property aligns items on the cross axis?
5. What does `flex-wrap: wrap` do?
