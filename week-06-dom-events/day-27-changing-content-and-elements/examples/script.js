const notice = document.querySelector("#notice");
const list = document.querySelector("#task-list");

document.querySelector("#highlight-button").addEventListener("click", function () {
  notice.classList.toggle("highlight");
});

document.querySelector("#add-button").addEventListener("click", function () {
  const item = document.createElement("li");
  item.textContent = "A new practice task";
  list.appendChild(item);
});

document.querySelector("#remove-button").addEventListener("click", function () {
  const firstItem = list.querySelector("li");
  if (firstItem) {
    firstItem.remove();
  }
});
