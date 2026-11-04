# Day 17 Instructor Guide — Mobile-First and Media Queries

## Teaching purpose
Students move from inspecting responsive problems to controlling layout changes with CSS.

## Preparation
- Review Day 16.
- Open today's example in Chrome.
- Prepare DevTools at 375px, 699px, 700px, and 900px.
- Display `images/day-17-mobile-first.svg`.

## Learning outcomes
Students can explain mobile-first, write a basic min-width media query, identify a breakpoint, and test just below and above it.

## 120-minute lesson plan
| Time | Activity |
|---|---|
| 20 min | Explain mobile-first, media queries, and breakpoints |
| 4 min | Recall viewport and responsive design |
| 30 min | Demo one-column default and two-column media query |
| 62 min | Guided and independent coding |
| 4 min | Exit question and review |

## Instructor demonstration
1. Open the example at 375px.
2. Show the single-column card layout.
3. Open the CSS and identify the default rule.
4. Find the `@media (min-width: 700px)` block.
5. Resize to 699px and 700px.
6. Ask students what changes and why.

## Teaching points
- The browser applies default rules first.
- Matching media query rules can override or add styles.
- A breakpoint should solve a visible layout problem.
- Do not teach complex media query features today.

## Common errors
- Missing closing brace.
- Misspelling `min-width`.
- Putting the media query inside the wrong selector.
- Assuming the media query applies below its min-width.
- Testing only at one screen width.

## Support
Give students a partially completed media query and ask them to fill in the condition and grid columns.

## Extension
Ask confident students to add a three-column layout at a second, wider breakpoint.

## Assessment
Each student shows the page below and above the breakpoint and explains the difference.