# Week 5 — JavaScript Foundations

## Goal

Understand basic JavaScript and write small programs that use data and logic.

## Day-by-day lessons

### Day 21 — Introduction to JavaScript
- Understand the role of JavaScript in a webpage.
- Add a JavaScript file to an HTML page.
- Use the browser console and `console.log()`.

### Day 22 — Variables, data types, and operators
- Learn `let` and `const`.
- Work with strings, numbers, and booleans.
- Use arithmetic and comparison operators.
- Practise simple calculations.

### Day 23 — Conditions
- Learn `if`, `else if`, and `else`.
- Use comparison and logical operators.
- Practical: check whether a number is positive, negative, or zero.

### Day 24 — Functions
- Learn why functions are useful.
- Use parameters and return values.
- Write small reusable functions.

### Day 25 — Arrays, loops, and calculator
- Create and read arrays.
- Use basic `for` loops.
- Build a simple calculator using JavaScript functions.

## Example: JavaScript file

HTML:

```html
<script src="script.js" defer></script>
```

JavaScript:

```javascript
const studentName = "A student";
const marks = 75;

function getResult(score) {
  if (score >= 60) {
    return "Pass";
  }
  return "Keep practising";
}

console.log(studentName);
console.log(getResult(marks));
```

## Practical exercises

1. Print messages in the console.
2. Store a name and age in variables.
3. Calculate the total of two numbers.
4. Write a function that returns the larger of two numbers.
5. Use a loop to print each item in an array.

## Homework

Create a calculator that can add, subtract, multiply, and divide two numbers. Handle division by zero with a clear message.

## Quick review

1. What is a variable?
2. When should you use `const`?
3. What is a boolean?
4. What does an `if` statement do?
5. Why are functions useful?

## Expected result

Students can write small JavaScript programs and understand the basic building blocks of the language.
