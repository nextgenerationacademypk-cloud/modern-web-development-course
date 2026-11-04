# Day 10 Instructor Guide — Semantic HTML and Profile Page Project

## Lesson purpose

Students learn how semantic elements describe the purpose of page regions. They then bring the week's HTML skills together in a small personal profile website. The project remains HTML-only; styling begins in Week 3.

## Before class

- Open `examples/index.html` and check the browser preview.
- Display `images/day-10-semantic-layout.svg` and the profile page wireframe if available.
- Check that students can access their work from Days 6–9.
- Prepare a simple sample profile using fictional information.
- Remind students not to publish real phone numbers, home addresses, passwords, or private details.

## Learning outcomes

Students should be able to:
1. Identify the purpose of `header`, `nav`, `main`, `section`, `article`, and `footer`.
2. Choose a meaningful semantic element instead of using `div` for every region.
3. Build a profile page with clear sections and working in-page navigation.
4. Check the page for missing content, broken links, and basic structure errors.
5. Explain how the page uses skills from the first two weeks.

## 120-minute teaching plan

| Time | Activity |
|---|---|
| 0–20 min | Explain semantic page regions using the diagram. Compare semantic elements with generic containers. |
| 20–24 min | Review the HTML elements students used during Days 6–9. |
| 24–54 min | Demonstrate a simple semantic page skeleton and one in-page navigation link. |
| 54–116 min | Students complete and check their personal profile page. Give short individual feedback. |
| 116–120 min | Invite a few learners to explain their page structure; explain how the project will be reviewed. |

## Instructor demonstration

1. Show a simple page outline: header, navigation, main content, and footer.
2. Add `header` for introductory content and `nav` for important page links.
3. Add one `main` element for the page's primary content.
4. Add separate `section` elements with headings for About, Interests, and Learning Goals.
5. Explain that `article` is suitable for a self-contained item that could stand on its own; do not force it into every page.
6. Add a footer for closing or ownership information.
7. Connect navigation links to section IDs and test each link in Chrome.
8. Show how the semantic structure improves clarity even though the page has no CSS yet.

## Visual teaching notes

Use `images/day-10-semantic-layout.svg` as a page map. Point to each region and ask students to name its purpose. Then compare the map with the actual example in VS Code and Chrome. Explain that semantic elements describe meaning; CSS will control appearance in the next week.

## Profile project requirements

The learner's page should include:
- A page title and one main `h1`.
- A semantic header and navigation.
- A main region with at least three titled sections.
- At least one paragraph and one useful list.
- At least one relevant image with appropriate alt text.
- Working in-page navigation links.
- A footer.
- No CSS or JavaScript requirement for this week's submission.

## Questions to check understanding

- What content belongs in the main region?
- Why is `nav` more meaningful than a generic container for the main navigation?
- When might `article` be useful?
- What makes an in-page navigation link work?
- Which HTML skills from this week did you use in your project?

## Common mistakes to watch for

- Using several `main` elements for one simple page.
- Choosing semantic elements only because of how they look.
- Creating navigation links that point to missing IDs.
- Forgetting headings inside sections.
- Copying example content without understanding it.
- Including private information in a public project.

## Support and extension

- **Extra support:** Provide the section outline and ask learners to complete one region at a time.
- **Pair support:** Ask partners to review the page structure and click each navigation link; each student remains responsible for their own code.
- **Extension:** Add an `article` for a self-contained learning update or a nested subsection where it makes sense.

## Project review

Use a short formative review:
- Structure and semantic regions are present.
- Headings and content are organised.
- Image path and alt text are appropriate.
- In-page links work.
- Code is readable and the learner can explain it.

Give one strength and one next step. Do not penalise students for not having CSS; styling is introduced in Week 3.

## Checkpoint

Each learner should have a working HTML-only profile page and be able to point to the header, navigation, main content, sections, and footer in both the code and the browser.
