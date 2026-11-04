# Day 8 Lecture Notes — Images and Lists

## Learning goal

Add images to a webpage and organise information into ordered and unordered lists.

## 1. Why use images?

Images can help explain a topic, show a product, or make a page more interesting. An HTML image is added with the `<img>` element.

Unlike a paragraph, img does not wrap text and does not need a separate closing tag.

The basic pattern is:

```html
<img src="images/reading.svg" alt="An open book on a desk">
```

There are two important attributes:

- `src` tells the browser where the image file is located.
- `alt` provides a text alternative that describes the image's purpose or meaning.

## 2. Understand image paths

The image must exist at the location written in src.

For example, your project could look like this:

```text
my-website/
├── index.html
└── images/
    └── reading.svg
```

Because the images folder is beside index.html, this path is correct:

```html
<img src="images/reading.svg" alt="An open book on a desk">
```

If the file is named reading.jpg but your code says reading.svg, the browser will not find it. File extensions matter. Check the exact spelling, capital letters, and folder names.

## 3. Why is alt text important?

Alt text describes meaningful image content for people who cannot see the image. It can also be shown when an image cannot load.

Useful alt text is short and describes the important information.

```html
<img src="images/academy-building.jpg"
     alt="The entrance of the academy building">
```

Avoid writing alt text such as "image" or "photo". Those words do not explain what the image shows.

If an image is only decorative and adds no information, use an empty alt value:

```html
<img src="images/decoration.svg" alt="">
```

Do not leave out the alt attribute.

## 4. Control image dimensions

You can provide a width or height attribute. For this beginner example, we will set a width:

```html
<img src="images/reading.svg"
     alt="An open book on a desk"
     width="400">
```

The browser uses the width in pixels. Avoid stretching an image into the wrong shape. We will learn better responsive image sizing with CSS in Week 4.

## 5. What is a list?

A list groups related items. HTML has two common list types.

### Unordered list

Use `<ul>` when the order of items is not important. The browser normally displays bullets.

```html
<h2>Things I Need</h2>
<ul>
  <li>A book</li>
  <li>A notebook</li>
  <li>A pen</li>
</ul>
```

Each item is written inside an `<li>` element.

### Ordered list

Use `<ol>` when the order matters, such as steps in a process or a recipe. The browser normally displays numbers.

```html
<h2>My Study Steps</h2>
<ol>
  <li>Open VS Code.</li>
  <li>Open the project folder.</li>
  <li>Open index.html.</li>
  <li>Write and save your code.</li>
</ol>
```

## 6. Lists inside lists

A list item can contain another list. This is useful when one item has related sub-items.

```html
<ul>
  <li>Web development
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
  </li>
  <li>Graphic design</li>
</ul>
```

Notice that the inner list is placed inside the related li element. Keep the indentation clear.

## 7. Complete example

The example file for today uses a local SVG image included in this lesson folder. Open it in VS Code and notice that the image path starts with `images/`.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Hobby</title>
</head>
<body>
  <h1>My Hobby: Reading</h1>

  <img src="images/reading.svg"
       alt="An open book on a desk"
       width="400">

  <h2>Things I Need</h2>
  <ul>
    <li>A book</li>
    <li>A quiet place</li>
    <li>A notebook</li>
  </ul>

  <h2>My Reading Routine</h2>
  <ol>
    <li>Choose a book.</li>
    <li>Find a comfortable place.</li>
    <li>Read a few pages.</li>
  </ol>
</body>
</html>
```

## 8. Common mistakes

| Mistake | How to fix it |
|---|---|
| Image does not appear | Check src, file name, extension, and folder path |
| Image has no useful alternative | Add meaningful alt text |
| Using alt="image" | Describe what matters in the image |
| Using ul for numbered instructions | Use ol when order matters |
| Forgetting li elements | Put every list item inside li |
| List is difficult to read in code | Indent nested elements clearly |

## Key words

| Word | Simple meaning |
|---|---|
| Image | A picture shown on a webpage |
| src | The path to an image file |
| alt | Text alternative for an image |
| File path | The location of a file |
| Unordered list | A list where item order is not important |
| Ordered list | A list where sequence matters |
| List item | One item inside a list |

## Quick self-check

1. Which attribute gives the image file path?
2. Why do images need alt text?
3. What is the difference between ul and ol?
4. Which element contains each list item?
5. What should you check if an image does not appear?

## Remember

Check the image path carefully, write useful alt text, and choose a list type based on the meaning of the information.
