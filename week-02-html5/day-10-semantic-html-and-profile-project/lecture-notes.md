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
