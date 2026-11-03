// Interaction 1: open and close the mobile navigation.
const menuButton = document.querySelector("#menu-button");
const mainNav = document.querySelector("#main-nav");

menuButton.addEventListener("click", function () {
  const isOpen = mainNav.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

// Close the mobile menu after a navigation link is selected.
mainNav.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    mainNav.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

// Interaction 2: show or hide the FAQ answer.
const faqButton = document.querySelector("#faq-button");
const faqAnswer = document.querySelector("#faq-answer");

faqButton.addEventListener("click", function () {
  const willShow = faqAnswer.hidden;
  faqAnswer.hidden = !willShow;
  faqButton.setAttribute("aria-expanded", String(willShow));
  faqButton.textContent = willShow ? "Hide answer" : "Show answer";
});

// Simple client-side form feedback. This form does not send data to a server.
const contactForm = document.querySelector("#contact-form");
const formMessage = document.querySelector("#form-message");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (contactForm.checkValidity()) {
    formMessage.textContent = "Thank you. The form looks complete.";
  } else {
    formMessage.textContent = "Please complete the required fields.";
    contactForm.reportValidity();
  }
});

// Set the current year automatically.
document.querySelector("#year").textContent = new Date().getFullYear();
