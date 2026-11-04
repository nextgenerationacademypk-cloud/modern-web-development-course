# Day 19 Instructor Guide — CSS Grid and Responsive Images

## Teaching purpose
Introduce CSS Grid as a second layout tool and teach students to prevent image overflow.

## Prepare
- Open today's gallery example.
- Display `images/day-19-grid-auto-fit.svg`.
- Have DevTools ready at 375px, 768px, and 1280px.
- Review Day 18 Flexbox and the Week 3 box model.

## Learning outcomes
Students create a simple grid, explain gap and minmax, and make images fit their containers.

## 120-minute plan
20 min explanation · 4 min theory review · 30 min demo · 62 min practice · 4 min review.

## Instructor demo
1. Show a one-column grid.
2. Add a two-column media query.
3. Explain the difference between Grid and Flexbox at a beginner level.
4. Show `repeat(auto-fit, minmax(220px, 1fr))`.
5. Resize the viewport and observe the number of columns.
6. Add `max-width: 100%; height: auto;` to images.
7. Temporarily remove the responsive image rule to show overflow.

## Teaching cautions
- Teach the explicit one-column/two-column approach before the auto-fit shortcut.
- Do not teach advanced grid placement, named lines, or nested grids.
- Explain that `object-fit: cover` crops images.
- Keep image filenames and paths simple.

## Common errors
- Grid declaration on a child instead of parent.
- Missing `display: grid`.
- A minmax minimum that is too large for the container.
- Images stretched because width and height are both fixed.

## Support
Give a partly completed grid rule and ask students to fill in the column definition.

## Extension
Let students compare a media-query grid with the auto-fit/minmax version.

## Checkpoint
Each student demonstrates a gallery that changes columns and images that remain inside cards.