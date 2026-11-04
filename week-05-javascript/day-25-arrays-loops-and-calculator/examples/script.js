// Day 25: arrays and a basic for loop.
const subjects = ["HTML", "CSS", "JavaScript"];

console.log("Subjects:", subjects);
console.log("Number of subjects:", subjects.length);

for (let index = 0; index < subjects.length; index++) {
  console.log("Subject " + (index + 1) + ":", subjects[index]);
}

// Guided calculator: change these values to test the operations.
const firstNumber = 20;
const secondNumber = 5;

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Cannot divide by zero.";
  }
  return a / b;
}

console.log("Calculator results");
console.log("Add:", add(firstNumber, secondNumber));
console.log("Subtract:", subtract(firstNumber, secondNumber));
console.log("Multiply:", multiply(firstNumber, secondNumber));
console.log("Divide:", divide(firstNumber, secondNumber));