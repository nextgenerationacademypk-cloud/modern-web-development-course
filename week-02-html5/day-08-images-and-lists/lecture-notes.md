# Day 8 Lecture Notes — Images and Lists

![Diagram showing index.html linking to an image inside the images folder.](images/day-08-image-path.svg)

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


## 9. How to choose useful alternative text

Before writing alt text, ask: if a visitor could not see this image, what information would they need from it?

For an image that teaches something, describe the important information. For an image of a product, identify the product or detail being shown. If the image is only decoration and does not add information, use an empty alt value so assistive technology can skip it.

For example, a meaningful classroom photo might use alt text such as Students working on computers in a classroom. A decorative divider can use alt="". Do not leave out the alt attribute.

Do not repeat nearby text word for word if it does not add anything. Do not begin every alternative with Image of unless those words are needed to make the meaning clear.

## 10. Common image file types

| File type | Common use | Beginner note |
|---|---|---|
| JPG or JPEG | Photographs | Often suitable for photos |
| PNG | Images that need transparency or sharp details | Can have a larger file size |
| SVG | Logos, icons, and simple illustrations | Can scale without becoming blurry |
| WebP | Web images with efficient compression | Supported by modern browsers |

The extension in your HTML must match the actual file name. For example, classroom.jpg and classroom.png are not the same file.

## 11. Width, height, and image proportions

The width and height attributes can tell the browser the image's dimensions. If you set both to values that do not match the original image shape, the image may look stretched. For this beginner exercise, set the width only when you are unsure of the correct proportions.

Later, CSS will help images fit different screen sizes. For now, understand that a very large image can overflow a small screen if its width is not managed. Do not try to solve this with repeated spaces or line breaks.

## 12. Choosing between ordered and unordered lists

Ask whether the order changes the meaning:

- If the items can be moved around and the meaning stays the same, use ul.
- If the items describe steps, ranking, or a sequence, use ol.

For example, a list of required stationery can be unordered. Instructions for saving a file should be ordered because the steps are performed in sequence.

## 13. How nested lists are read

A nested list shows that some items belong under another item. The inner list must be placed inside the relevant li element. This creates a parent-and-child relationship in the HTML structure.

Imagine a top-level item called Courses. Under it, a nested list may contain HTML Basics and CSS Basics. Another top-level item such as Student Support is separate. Indentation helps you see this relationship in your code.

## 14. Real-world example: a course page

A course information page may show a photograph of a classroom, an unordered list of topics covered, and an ordered list explaining how to register. The image helps visitors understand the classroom, the topic list summarises course content, and the numbered list explains the registration steps in order.

## 15. Step-by-step image troubleshooting

If an image does not appear:

1. Check that the image file is saved inside your project.
2. Check the folder name, such as images.
3. Check the exact file name and extension.
4. Check uppercase and lowercase letters.
5. Check that the src path is written relative to the HTML file.
6. Save your HTML file and refresh the browser.

If the folder contains reading.svg, the src value must point to images/reading.svg. It will not work if the code points to reading.jpg and that file does not exist.

## 16. Extra common mistakes

- Missing alt attribute: provide an alt attribute for every img element.
- Writing unhelpful alt text: describe the image's purpose or use an empty value for decoration.
- Choosing a list by its bullet appearance: choose ul or ol based on whether order matters.
- Placing text directly inside ul: place each list item inside li.
- Using a remote image without permission: use your own image or an image you are allowed to use.
