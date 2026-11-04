# Day 10 Lecture Notes — Semantic HTML and Profile Page Project

## Learning goal

Use meaningful HTML page regions and combine the week's skills in a complete personal profile website.

## 1. What does semantic HTML mean?

Semantic means that something has meaning. Semantic HTML uses elements that describe the purpose of the content they contain.

For example, a navigation area should use `<nav>`, and the main page content should use `<main>`.

Semantic elements help:
- People understand how a page is organised.
- Screen readers identify important page regions.
- Browsers and other tools understand the purpose of content.
- Developers read and maintain the code more easily.

## 2. Important semantic elements

### header

The `<header>` element represents introductory content for a page or a section. A page header often contains the site title, logo, or introductory information.

```html
<header>
  <h1>My Profile</h1>
  <p>My beginner web development page</p>
</header>
```

### nav

The `<nav>` element contains important navigation links.

```html
<nav aria-label="Main navigation">
  <a href="#home">Home</a>
  <a href="#about">About</a>
  <a href="#contact">Contact</a>
</nav>
```

The aria-label gives this navigation area a clear name for assistive technology. It is especially useful if a page has more than one navigation area.

### main

The `<main>` element contains the main, unique content of the page. A simple page normally has one main element.

```html
<main>
  <h2>Welcome</h2>
  <p>This is the main content of my profile.</p>
</main>
```

### section

The `<section>` element groups related content that belongs together. A section should normally have a heading.

```html
<section id="about">
  <h2>About Me</h2>
  <p>I am learning HTML.</p>
</section>
```

### article

The `<article>` element represents a self-contained piece of content that could make sense on its own, such as a news story, blog post, or forum post.

```html
<article>
  <h2>My First HTML Page</h2>
  <p>I created my first webpage this week.</p>
</article>
```

A small profile page does not need an article element unless it contains a suitable independent item.

### footer

The `<footer>` element represents footer information for a page or section. It may contain copyright information or related links.

```html
<footer>
  <p>My beginner profile website</p>
</footer>
```

## 3. What is the difference between section and article?

A section groups related content under a common topic. An article is a complete item that could stand on its own.

For example:
- A section called My Skills can contain a list of skills.
- An article called My First Project can describe one complete project.

Do not use semantic elements only to get a visual effect. CSS will control the appearance in the next week.

## 4. Navigation to page sections

A navigation link can jump to an element with a matching id.

```html
<nav aria-label="Main navigation">
  <a href="#home">Home</a>
  <a href="#about">About</a>
</nav>

<main>
  <section id="home">
    <h2>Home</h2>
    <p>Welcome to my page.</p>
  </section>

  <section id="about">
    <h2>About</h2>
    <p>I am learning web development.</p>
  </section>
</main>
```

The href value `#about` matches the section's `id="about"`. The values must match exactly. Each id should be unique on the page.

## 5. Semantic page structure

A simple page can be organised like this:

```text
html
├── head
└── body
    ├── header
    │   ├── h1
    │   └── nav
    ├── main
    │   ├── section: Home
    │   ├── section: About
    │   ├── section: Skills
    │   └── section: Contact
    └── footer
```

This is an outline, not code. It shows how the parts fit together.

## 6. Build the Week 2 profile project

Your mini-project is a personal profile page. It brings together the HTML skills learned this week.

Your page should include:

1. A clear page title in the browser tab.
2. One main h1 heading.
3. A header area with a navigation menu.
4. A main area with Home, About, Skills or Interests, and Contact sections.
5. Headings and paragraphs in a logical order.
6. At least one useful link.
7. An image with appropriate alt text.
8. At least one list.
9. A footer.
10. Correct in-page navigation links.

A sample form can be included as practice, but it must be labelled as a demonstration. Do not publish personal phone numbers, home addresses, or other private information.

## 7. Example profile page

Open `examples/index.html` in VS Code. It is a complete starter example. Study how the header, nav, main, sections, and footer are arranged.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Profile</title>
</head>
<body>
  <header>
    <h1>My Profile</h1>
    <nav aria-label="Main navigation">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <main>
    <section id="home">
      <h2>Welcome</h2>
      <p>Hello! I am a beginner learning web development.</p>
    </section>

    <section id="about">
      <h2>About Me</h2>
      <p>I enjoy learning and building useful things.</p>
    </section>

    <section id="skills">
      <h2>My Learning Goals</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>
    </section>

    <section id="contact">
      <h2>Contact</h2>
      <p>This is a classroom project. Do not publish private contact details.</p>
    </section>
  </main>

  <footer>
    <p>My beginner profile website</p>
  </footer>
</body>
</html>
```

## 8. How to check your project

Open the page in Chrome and test each navigation link. Check that each link moves to the correct section. Read the page headings in order. Check that the image loads and that every meaningful image has alt text.

Then ask yourself:
- Can a visitor understand what this page is about?
- Are the sections in a sensible order?
- Does every navigation link work?
- Can I explain why I used header, nav, main, section, and footer?

## 9. Common mistakes

| Mistake | How to fix it |
|---|---|
| Putting all content inside header | Put the main page content inside main |
| Using nav for every group of links | Use nav for the main navigation area |
| Creating a section without a topic | Give the section a meaningful heading |
| Repeating the same id | Give every target element a unique id |
| Link target does not match | Match href="#name" with id="name" |
| Using semantic tags only for appearance | Choose elements for meaning; use CSS for design later |

## Key words

| Word | Simple meaning |
|---|---|
| Semantic HTML | HTML elements chosen for their meaning |
| Header | Introductory area of a page or section |
| Nav | Area containing important navigation links |
| Main | Main unique content of a page |
| Section | A group of related content |
| Article | A self-contained piece of content |
| Footer | Closing information for a page or section |
| Landmark | A meaningful page region that helps users navigate |

## Quick self-check

1. What is semantic HTML?
2. What is the purpose of main?
3. When should you use nav?
4. What is the difference between section and article?
5. How does a link jump to a section on the same page?

## Remember

Semantic HTML gives your page a clear structure. The Week 2 profile project is your chance to combine headings, paragraphs, links, images, lists, and semantic elements before you begin CSS in Week 3.


## 10. How semantic structure helps visitors

Think about entering a large building. Signs such as Reception, Classrooms, and Library help you find the correct place. Semantic HTML provides similar signposts in a webpage. A visitor using a screen reader can move between meaningful page regions rather than reading every line from the beginning.

A page with a header, navigation, main content, and footer is easier to understand than a page where every part is just an unnamed container.

## 11. Semantic elements compared with div and span

HTML also provides generic elements such as div and span. They do not describe a special purpose by themselves.

- Use div when you need a general block container and no semantic element fits.
- Use span when you need a general inline container inside text.
- Prefer header, nav, main, section, article, and footer when their meanings match the content.

Do not replace every div with a semantic element. Choose the element that best describes the content.

## 12. More detail: section or article?

A section is a thematic group of related content, usually with its own heading. An article is a complete, independent item that could be shared or understood on its own.

For example, a page may have a section called Latest News. Inside it, there may be separate article elements for individual news stories. A profile page may have sections for About Me and Skills, but it does not need an article if it has no independent article-like content.

## 13. Page landmarks and navigation

The main element identifies the central content of the page. The nav element identifies a major navigation area. The header and footer provide introductory and closing information for a page or section. Use these elements in a way that matches the content rather than adding them only to make the code look advanced.

A simple page normally has one main element. If a page has multiple navigation areas, give each nav a useful accessible name so visitors can tell them apart.

## 14. Build the profile project in stages

Do not try to write the whole page at once. Build it in small steps:

1. Create the HTML document structure from Week 1.
2. Add a page title inside head.
3. Add header and an h1 inside body.
4. Add nav with links to section ids.
5. Add main.
6. Add the Home, About, Skills or Interests, and Contact sections inside main.
7. Give every section a unique id and a meaningful h2 heading.
8. Add paragraphs, links, an image with alt text, and a list where they make sense.
9. Add a footer after main.
10. Save, preview, and test every navigation link.

## 15. Understand the project navigation

For a link such as href="#about", the browser searches the current page for an element with id="about". The values must match exactly. Use consistent spelling and keep every id unique.

## 16. Accessibility checks for the profile page

- Use one clear h1 for the page's main topic.
- Keep headings in a meaningful order.
- Use nav for the main navigation links.
- Give meaningful images useful alt text.
- Make link text describe its destination.
- Give each section a heading.
- Use semantic elements only when their meaning fits.

These habits make a page easier for more people to understand and use.

## 17. Real-world example: a small academy website

A simple academy page could have a header with the academy name, a nav area with links to About, Courses, and Contact, a main area with those sections, and a footer with general academy information. A Courses section could contain a list of course names. A separate article could describe one featured course in detail if that content is independent.

## 18. Project review checklist

Before you submit, check the page in the browser:

1. Does the browser tab show a useful title?
2. Is the main page heading visible and clear?
3. Does each navigation link move to the correct section?
4. Does each section have a meaningful heading?
5. Are paragraphs readable and placed under the correct headings?
6. Does the image load, and does it have suitable alt text?
7. Are list items inside ul or ol elements?
8. Can you explain the job of header, nav, main, section, and footer?
9. Have you avoided publishing private contact information?

## 19. Extra common mistakes

- Using main as a wrapper for the entire document: main belongs inside body and contains the central page content, not the header and footer in this course structure.
- Using section for every small styling group: use it for a meaningful thematic section, normally with a heading.
- Using article for any random box: article is for self-contained content.
- Using div when a clear semantic element fits: choose the meaningful element when appropriate.
- Creating navigation links without matching ids: test every link and target.
- Adding semantic tags without understanding them: be ready to explain why each one is used.
