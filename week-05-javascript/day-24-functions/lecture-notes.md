# Day 24 Lecture Notes — Functions

## 1. What is a function?
A function is a reusable block of code that performs a task. Instead of writing the same instructions repeatedly, you can define a function once and call it when needed.

## 2. Declare a function
```javascript
function sayHello() {
  console.log("Hello, learner!");
}

sayHello();
```
The function is declared with the `function` keyword and runs when it is called.

## 3. Parameters and arguments
A parameter is a named input in the function definition. An argument is the actual value passed when the function is called.
```javascript
function greetStudent(studentName) {
  console.log("Welcome, " + studentName);
}

greetStudent("Amina");
greetStudent("Bilal");
```
Here, `studentName` is a parameter. The strings are arguments.

## 4. Return a value
Use `return` when a function should send a result back to the code that called it.
```javascript
function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

const answer = addNumbers(5, 3);
console.log(answer);
```

## 5. Return versus console.log
- `console.log()` displays a value in the developer console.
- `return` gives a value back to the caller so it can be stored, displayed, or used in another calculation.

## 6. More calculator functions
```javascript
function subtractNumbers(a, b) {
  return a - b;
}

function multiplyNumbers(a, b) {
  return a * b;
}

console.log(subtractNumbers(9, 4));
console.log(multiplyNumbers(3, 4));
```

## 7. A function with a decision
```javascript
function getPassMessage(score) {
  if (score >= 60) {
    return "Pass";
  }
  return "Keep practising";
}

console.log(getPassMessage(75));
```
A function can use conditions and return different values.

## 8. Function names
Use descriptive names such as `calculateTotal`, `getPassMessage`, or `convertMinutesToSeconds`. Function names usually begin with a verb that describes the action.

## 9. Common mistakes
- Defining a function but never calling it.
- Forgetting parentheses when calling a function.
- Using a parameter name that does not match inside the function.
- Expecting `console.log()` to return a calculation result.
- Writing code after `return` and expecting it to run in the same function path.

## 10. Guided example
Open `examples/index.html`. Change the arguments passed to each function and inspect the results in Console.

## 11. Remember
A function can receive inputs, perform a task, and return an output. Small functions make programs easier to test and understand.