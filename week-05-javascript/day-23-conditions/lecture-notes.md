# Day 23 Lecture Notes — Conditions

## 1. Why use conditions?
A program often needs to choose what to do. For example, it may show a pass message when a score reaches a required mark, or a different message when it does not.

## 2. The if statement
```javascript
const temperature = 30;

if (temperature > 25) {
  console.log("It is a warm day.");
}
```
The code inside the braces runs only when the condition is true.

## 3. if and else
```javascript
const score = 72;

if (score >= 60) {
  console.log("Pass");
} else {
  console.log("Keep practising");
}
```
The `else` block runs when the `if` condition is false.

## 4. if, else if, and else
```javascript
const score = 82;

if (score >= 80) {
  console.log("Excellent");
} else if (score >= 60) {
  console.log("Pass");
} else {
  console.log("Keep practising");
}
```
JavaScript checks conditions from top to bottom and runs the first matching branch. Order matters: put the more specific or higher boundary first in this example.

## 5. Comparison operators
- `===` equal to (strict equality)
- `!==` not equal to (strict inequality)
- `>` greater than
- `<` less than
- `>=` greater than or equal to
- `<=` less than or equal to

## 6. Logical operators
- `&&` means AND: both conditions must be true.
- `||` means OR: at least one condition must be true.
- `!` means NOT: it reverses a boolean value.

```javascript
const age = 20;
const hasPermission = true;

if (age >= 18 && hasPermission) {
  console.log("Condition accepted.");
}
```

## 7. Positive, negative, or zero
```javascript
const number = -4;

if (number > 0) {
  console.log("Positive");
} else if (number < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}
```

## 8. Trace before running
For each example, write down the value and ask:
1. Is the first condition true?
2. If not, is the next condition true?
3. If no condition matches, what does `else` do?

## 9. Common mistakes
- Using `=` instead of `===` in a comparison.
- Missing a closing brace.
- Writing an `else` before an `if`.
- Putting conditions in the wrong order.
- Forgetting that `&&` needs both sides to be true.

## 10. Guided example
Open `examples/index.html` and inspect the Console. Change the number and score in `script.js`, predict the message, then run the code.

## 11. Remember
Conditions let a program make decisions. Use clear comparisons, readable indentation, and test values on both sides of each boundary.