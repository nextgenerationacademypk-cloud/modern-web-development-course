# Week 5 — JavaScript Foundations

## Goal

Understand basic JavaScript and write small programs that use data and logic. Students should practise each new idea with short examples before combining concepts.

## Day-by-day lessons

### Day 21 — Introduction to JavaScript
- Understand the role of JavaScript in a webpage.
- Add a JavaScript file to an HTML page.
- Use the browser console and `console.log()`.
- Practise changing a message and viewing the result.

### Day 22 — Variables, data types, and operators
- Learn `let` and `const`.
- Work with strings, numbers, and booleans.
- Use arithmetic and comparison operators.
- Practise simple calculations with clear input values.

### Day 23 — Conditions
- Learn `if`, `else if`, and `else`.
- Use comparison and logical operators.
- Practise tracing which branch of a condition runs.
- Practical: check whether a number is positive, negative, or zero.

### Day 24 — Functions
- Learn why functions are useful.
- Use parameters and return values.
- Write, call, and test small reusable functions.
- Guided practice: write separate functions for addition and subtraction.

### Day 25 — Arrays, loops, and guided calculator practice
- Create an array and read items by index.
- Use a basic `for` loop to visit each item.
- Trace a loop one step at a time before writing a longer one.
- Combine variables, conditions, and functions in a small calculator exercise.
- Treat the calculator as a guided weekly project, not a timed independent coding test.

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
5. Create an array of three favourite subjects and print each item with a basic loop.
6. Extend a guided calculator to add, subtract, multiply, and divide two numbers. Handle division by zero with a clear message.

## Homework

Complete the guided calculator. Add clear messages for the user and test at least one normal calculation and division by zero. Students who need more practice may first complete addition and subtraction; multiplication and division are extension goals if class pace requires it.

## Quick review

1. What is a variable?
2. When should you use `const`?
3. What is a boolean?
4. What does an `if` statement do?
5. Why are functions useful?
6. What does an array store?
7. What does a loop repeat?

## Expected result

Students can write small JavaScript programs, use a basic array and loop, and explain the parts of a simple calculator they built with guidance.
