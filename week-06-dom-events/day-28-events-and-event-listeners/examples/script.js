let count = 0;
const output = document.querySelector("#count");

document.querySelector("#increase-button").addEventListener("click", function () {
  count = count + 1;
  output.textContent = count;
});

document.querySelector("#decrease-button").addEventListener("click", function () {
  if (count > 0) {
    count = count - 1;
    output.textContent = count;
  }
});

document.querySelector("#reset-button").addEventListener("click", function () {
  count = 0;
  output.textContent = count;
});

const nameInput = document.querySelector("#name-input");
const preview = document.querySelector("#name-preview");

nameInput.addEventListener("input", function () {
  preview.textContent = nameInput.value || "Your text will appear here.";
});
