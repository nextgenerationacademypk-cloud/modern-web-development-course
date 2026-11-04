// Teaching example: two small client-side interactions.
const faqButton = document.querySelector("#faq-button");
const faqAnswer = document.querySelector("#faq-answer");

if (faqButton && faqAnswer) {
  faqButton.addEventListener("click", () => {
    const isHidden = faqAnswer.hidden;
    faqAnswer.hidden = !isHidden;
    faqButton.setAttribute("aria-expanded", String(isHidden));
  });
}

const messageButton = document.querySelector("#message-button");
const statusMessage = document.querySelector("#status-message");
if (messageButton && statusMessage) {
  messageButton.addEventListener("click", () => {
    statusMessage.textContent = "This is a browser demonstration only; no message was sent.";
  });
}
