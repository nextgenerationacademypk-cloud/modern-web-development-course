# Day 22 Lecture Notes — Variables, Data Types and Operators

## 1. What is a variable?
A variable is a named place in a program where a value can be used. Example:
```javascript
const academyName = "Bright Future Academy";
let studentCount = 20;
console.log(academyName);
console.log(studentCount);
```

## 2. const and let
Use `const` when you do not plan to assign a different value to the variable. Use `let` when the variable needs a new value later.
```javascript
const courseName = "Web Development";
let score = 10;
score = 12;
console.log(score);
```
A `const` variable cannot be reassigned. A `let` variable can be reassigned. Prefer `const` by default, and use `let` when reassignment is needed.

## 3. Naming variables
Use clear names such as `studentName`, `totalPrice`, and `numberOfBooks`. JavaScript variable names are case-sensitive. Avoid spaces and do not start a name with a number.

## 4. Basic data types
```javascript
const learnerName = "Amina"; // string: text
const age = 18;              // number
const isEnrolled = true;     // boolean: true or false
```
A string is written inside quotes. A number is written without quotes. A boolean is either `true` or `false`.

## 5. Check a value's type
```javascript
console.log(typeof learnerName);
console.log(typeof age);
console.log(typeof isEnrolled);
```
The `typeof` operator helps inspect the type of a value.

## 6. Arithmetic operators
| Operator | Meaning | Example |
|---|---|---|
| `+` | Addition | `5 + 2` gives 7 |
| `-` | Subtraction | `5 - 2` gives 3 |
| `*` | Multiplication | `5 * 2` gives 10 |
| `/` | Division | `10 / 2` gives 5 |
| `%` | Remainder | `7 % 2` gives 1 |

## 7. Assignment and comparison
- `=` assigns a value.
- `===` checks whether two values are strictly equal.
- `!==` checks whether two values are not strictly equal.
- `>`, `<`, `>=`, and `<=` compare numbers.

```javascript
const firstScore = 75;
const secondScore = 60;
console.log(firstScore > secondScore); // true
console.log(firstScore === secondScore); // false
```

## 8. Build a small total
```javascript
const itemPrice = 250;
let quantity = 3;
const total = itemPrice * quantity;
console.log("Total price:");
console.log(total);
```

## 9. Common mistakes
- Putting number values in quotes when you intend to calculate with them.
- Using `const` and then trying to reassign it.
- Confusing assignment `=` with comparison `===`.
- Misspelling variable names or changing capital letters.
- Forgetting quotes around string values.

## 10. Guided example
Open `examples/index.html` and inspect the Console. Change the price and quantity in `script.js`, save, and refresh.

## 11. Remember
Use meaningful variable names, choose `const` or `let` intentionally, and check whether a value is text, a number, or a boolean before using operators.