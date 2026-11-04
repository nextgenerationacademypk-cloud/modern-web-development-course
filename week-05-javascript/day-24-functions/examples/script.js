// Day 24: functions, parameters, arguments, and return values.
function greetStudent(studentName) {
  return "Welcome, " + studentName + "!";
}

function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

function subtractNumbers(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
}

function multiplyNumbers(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}

function getPassMessage(score) {
  if (score >= 60) {
    return "Pass";
  }
  return "Keep practising";
}

console.log(greetStudent("Amina"));
console.log("Addition:", addNumbers(5, 3));
console.log("Subtraction:", subtractNumbers(9, 4));
console.log("Multiplication:", multiplyNumbers(3, 4));
console.log("Result:", getPassMessage(75));