# Day 7 Instructor Guide — Text Formatting and Links

## Lesson purpose

Students learn a small set of text emphasis elements and how links connect pages and page sections. Explain that links are useful only when their destination is correct and their text clearly describes where they go.

## Before class

- Open `examples/index.html` in VS Code and Chrome.
- Display `images/day-07-link-anatomy.svg`.
- Prepare one safe external learning link and one in-page section link.
- Check that internet access is available for the external-link demonstration; keep a local fallback example ready.
- Remind students not to publish personal email addresses or phone numbers.

## Learning outcomes

Students should be able to:
1. Use `strong` and `em` for meaningful emphasis.
2. Create a link with an anchor element and a working `href`.
3. Recognise an external URL, a relative file path, and an in-page fragment link.
4. Use descriptive link text and test each destination.

## 120-minute teaching plan

| Time | Activity |
|---|---|
| 0–20 min | Explain emphasis and link purposes. Use the link anatomy diagram. |
| 20–24 min | Review yesterday's heading and paragraph structure. |
| 24–54 min | Demonstrate emphasis, an external link, a relative link, and a link to a page section. Test each one. |
| 54–116 min | Students add a resource-links section to their profile page and test every link. |
| 116–120 min | Review working links and ask learners to explain the destination of one link. |

## Instructor demonstration

1. Add a sentence using `<strong>` for important meaning and `<em>` for emphasis.
2. Create an external link using an anchor and a complete URL in `href`.
3. Explain the visible link text and the destination separately.
4. Add an `id` to a section, then link to it with a fragment such as `#interests`.
5. Demonstrate a relative link to another file only if the class folder contains that file.
6. Click each link in Chrome. Show how to return to the original page.
7. If showing `target="_blank"`, also include `rel="noopener"` and explain that opening a new tab should be used only when helpful.

## Visual teaching notes

Use `images/day-07-link-anatomy.svg` to point out the anchor element, `href` attribute, destination, and visible text. Students should understand that changing the visible words does not change the destination; changing `href` does.

## Questions to check understanding

- Which part of an anchor tells the browser where to go?
- What makes link text helpful to a visitor?
- What is the difference between an external URL and an in-page link?
- Why should we test a link after writing it?

## Common mistakes to watch for

- Writing `href` as `herf` or leaving its value empty.
- Forgetting the `#` in a fragment link.
- Linking to an `id` that does not exist.
- Using vague link text such as “click here” without context.
- Pasting a URL with a typing error.

## Support and extension

- **Extra support:** Provide two destinations and ask students to complete the anchor tags.
- **Pair support:** One learner predicts the destination; the other clicks and checks it.
- **Extension:** Add a small “Useful resources” list with three trustworthy learning links and descriptive text.

## Checkpoint

Each learner should show at least two working links, including one external link and one in-page link, and explain the difference between the link text and its destination.
