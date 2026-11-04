# Day 27 Practical Exercises — Update, Add, Remove

## Exercise 1 — Change text
Select the paragraph with ID notice and change its textContent.

~~~js
const notice = document.querySelector("#notice");
notice.textContent = "The message was updated.";
~~~

## Exercise 2 — Read and set an attribute
Select the sample image. Read its alt attribute, then set a clearer alt description.

~~~js
const photo = document.querySelector("#sample-photo");
console.log(photo.getAttribute("alt"));
photo.setAttribute("alt", "A sample mountain view");
~~~

## Exercise 3 — Change a class
Add the highlight class to the notice. Remove it. Try toggle().

~~~js
notice.classList.add("highlight");
notice.classList.remove("highlight");
notice.classList.toggle("highlight");
~~~

## Exercise 4 — Create and append a list item
~~~js
const list = document.querySelector("#task-list");
const item = document.createElement("li");
item.textContent = "Practise DOM methods";
list.appendChild(item);
~~~

## Exercise 5 — Remove an element
Select the item with ID old-task and call remove().

## Required independent task
Add a button that creates a new list item with a fixed sample message each time it is clicked. Add a second button that removes the first item in the list when one exists.

## Checklist
- [ ] I changed text with textContent.
- [ ] I read and changed an attribute.
- [ ] I changed a CSS class.
- [ ] I created and appended an element.
- [ ] I removed an element.

## Optional challenge
Create a remove button inside each new list item. Clicking it should remove that item's li element. The instructor may guide this if students are ready.

## Troubleshooting
If an element is not visible, check that it was appended to the correct parent. If a class does not change appearance, check the CSS class spelling.
