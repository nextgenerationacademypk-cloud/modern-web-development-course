# Instructor Pre-Launch Validation Checklist

Use this checklist before the first student cohort. Mark each item complete only after a person has performed the check on the actual classroom devices and accounts. Repository text review alone does not count as a browser test.

## 1. Instructor computer and classroom

- [ ] VS Code is installed and opens normally.
- [ ] Google Chrome is installed and up to date.
- [ ] Live Server extension is installed and can open a local HTML page.
- [ ] Git is installed; `git --version` works in the terminal.
- [ ] A sample project can be opened, edited, saved, and refreshed.
- [ ] Projector/display and classroom internet are tested.
- [ ] A backup local copy of lesson examples is available if internet access fails.
- [ ] Students can access the course repository without needing instructor credentials.

## 2. Browser testing of lesson examples

For each daily example, open the HTML file in Chrome or through Live Server and check:

- [ ] Page loads without a blank screen or broken layout.
- [ ] Images and other local assets load.
- [ ] Navigation and local links work.
- [ ] CSS loads and the page remains readable.
- [ ] JavaScript interactions work as described.
- [ ] Chrome DevTools Console has no unexpected errors.
- [ ] The page has no unintended horizontal scrolling at a narrow mobile width.
- [ ] Keyboard users can reach and operate links and buttons.

At minimum, test one representative example from each week, then test every example used in a live instructor demonstration. For Week 8, test the Day 39 paired `examples/index.html` and `examples/script.js` together.

## 3. HTML and CSS validation

- [ ] Run important teaching examples through the [Nu HTML Checker](https://validator.w3.org/nu/).
- [ ] Review CSS examples with the [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/).
- [ ] Treat validator messages as prompts for review; explain any intentional teaching example that is incomplete.
- [ ] Check heading order, document language, image alt text, form labels, and button names.

## 4. GitHub and Git safety

- [ ] Instructor can create a repository and push a sample project.
- [ ] Students know that public repositories can be viewed and copied by anyone.
- [ ] Shared classroom computers use repository-specific Git identity settings, not a personal global email.
- [ ] Students are shown how to use a GitHub noreply commit email if they want to avoid exposing a personal email.
- [ ] No passwords, access tokens, API keys, private keys, student records, or private contact details appear in files before a push.
- [ ] Students understand that a public repository and a live GitHub Pages website are separate things.

## 5. GitHub Pages deployment rehearsal

Perform this rehearsal using an instructor-owned demonstration repository:

- [ ] Confirm the repository contains an `index.html` at the selected publishing location.
- [ ] Confirm all CSS, JavaScript, image, and font paths are relative and correct.
- [ ] Enable GitHub Pages using the intended branch and folder.
- [ ] Wait for the deployment to complete and open the live URL.
- [ ] Test navigation, images, JavaScript, and mobile layout on the live site.
- [ ] Make one small edit, commit, and push it.
- [ ] Confirm the live site updates.
- [ ] Prepare an offline/local demonstration in case the classroom internet is unavailable.

GitHub Pages publishes static files. It does not run server-side code or process/store a contact form by itself. Use fictional contact information in student demonstrations.

## 6. Screenshot preparation

Capture fresh screenshots from the instructor's actual current software installation. Avoid old screenshots that show menus or settings that have changed.

Recommended captures:

| Lesson | Screenshot to capture |
|---|---|
| Day 2 | VS Code workspace, Explorer, and opened project folder |
| Day 4 | Live Server running and browser preview |
| Day 32 | Terminal showing status, add, commit, and log |
| Day 33 | GitHub repository page and file list |
| Day 34 | GitHub Pages settings/deployment and Chrome DevTools Device Mode |
| Day 39 | GitHub Pages live site and browser Console |

Before adding screenshots, hide personal email addresses, account names where unnecessary, browser bookmarks, notifications, private repositories, tokens, and any student information. Save only images that the academy has permission to publish.

## 7. Student account and privacy checks

- [ ] Explain current GitHub account eligibility and age requirements.
- [ ] Provide an instructor-led alternative if a student cannot create an account.
- [ ] Do not ask students to disclose passwords, verification codes, or tokens.
- [ ] Use fictional contact details in project content.
- [ ] Explain that the course contact form is a front-end demonstration only and does not send or store messages.
- [ ] Keep attendance and grade records private and outside the public repository.

## 8. Day 40 presentation capacity

The standard presentation format is up to 8 minutes per student. The planned 54–116 minute presentation block supports up to six students with transitions.

- [ ] Confirm the actual class size before Day 36.
- [ ] If there are more than six students, schedule an additional block or a second presentation session.
- [ ] Ensure every student has an individual demonstration and viva.
- [ ] Prepare a private gradebook and use the same rubric for every student.
- [ ] Prepare a backup plan if a student's live URL is temporarily unavailable.

## 9. Repository metadata

A repository administrator should consider setting:

- **Description:** "An 8-week, 80-hour beginner course in HTML, CSS, responsive design, JavaScript, Git, GitHub, and website publishing by Next Generation Academy, Kohat."
- **Suggested topics:** `html`, `css`, `javascript`, `web-development`, `beginner-course`, `git`, `github-pages`, `education`.
- **Website field:** use the academy's official course or website URL only if it is live and approved for public display.

These are optional repository presentation settings; they do not affect the course files or student learning.

## 10. Final sign-off

| Check | Name / date | Notes |
|---|---|---|
| Instructor software test | | |
| Browser examples test | | |
| HTML/CSS validation | | |
| GitHub push rehearsal | | |
| GitHub Pages rehearsal | | |
| Screenshot review | | |
| Privacy review | | |
| Day 40 schedule confirmed | | |

Do not describe the course as fully classroom-tested until the browser, account, and deployment rehearsals above have actually been completed.
