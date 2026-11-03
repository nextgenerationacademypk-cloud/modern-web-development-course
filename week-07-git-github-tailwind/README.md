# Week 7 — Git, GitHub, Tailwind CSS, and Deployment

## Goal

Save project history, share code online, try introductory Tailwind CSS, and publish a static website.

## Day-by-day lessons

### Day 31 — Version control and Git
- Understand why developers keep a history of changes.
- Learn repository, commit, and working directory.
- Open a terminal in a project folder.
- Run `git --version` and configure a display name and email.

### Day 32 — Basic Git commands

Practise these commands in a course project:

```bash
git init
git status
git add .
git commit -m "Add first website files"
git log --oneline
```

Explain each command before students run it. Students should understand that a commit records a version of their work. Practise `git status` before and after staging files.

### Day 33 — GitHub and pushing a project
- Understand the difference between Git and GitHub.
- Create a GitHub repository.
- Connect a local project to the repository.
- Practise pushing code using the instructions shown by GitHub.
- Explain that GitHub authentication may use a browser sign-in or another supported method; do not ask students to paste passwords into terminal commands.
- Never upload passwords, private information, or secret keys.

### Day 34 — Introductory Tailwind CSS

**Classroom approach:** use the official Tailwind Play CDN for a short browser-based demonstration. This avoids adding Node.js and a build tool during a one-session introduction.

1. Explain utility-first CSS: small classes apply individual styles.
2. Compare a few Tailwind utilities with normal CSS.
3. Add the current official Play CDN script to a demonstration HTML page, following: https://tailwindcss.com/docs/installation/play-cdn
4. Practise text colour, background, padding, margin, width, rounded corners, Flexbox, Grid, and responsive prefixes.
5. Build a simple card or landing-page section.
6. Ask students to explain how a few utility classes change the appearance.

**Important limitation:** the Play CDN is for development and learning, not production websites. Do not use it as the production setup for the final deployed project. Students may use normal CSS for the final project. A production Tailwind workflow requires a build setup and should be taught separately in a later course.

**Scope note:** Tailwind is an introduction, not a replacement for learning CSS. Students may use traditional CSS for their final project.

### Day 35 — Deployment and testing
- Publish a simple static website with GitHub Pages.
- Follow current GitHub Pages documentation: https://docs.github.com/en/pages
- Explain that GitHub Pages hosts static site files such as HTML, CSS, JavaScript, and images; it does not run a Node.js server or database.
- Check the live URL.
- Use Chrome DevTools to inspect layout and simple errors.
- Test navigation, images, and mobile layout.

## Practical exercises

1. Initialise Git in a project folder.
2. Make two commits with clear messages.
3. Create a GitHub repository and push the project.
4. Style a small card with Tailwind Play CDN for learning only.
5. Publish a plain HTML/CSS/JavaScript site with GitHub Pages.

## Homework

Push a small website to GitHub and publish it if the repository and account settings allow. Submit the repository link and live URL.

## Quick review

1. What problem does version control solve?
2. What does `git status` show?
3. What is a commit?
4. How are Git and GitHub different?
5. What is a utility class in Tailwind?
6. Why is the Play CDN not the production build method?
7. What kind of website can GitHub Pages host?

## Expected result

Students can save project history, upload code to GitHub, recognise common Tailwind utilities, and publish a basic static website.
