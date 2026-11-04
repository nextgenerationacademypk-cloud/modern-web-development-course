// Day 23: simple decisions using conditions.
const number = -4;

if (number > 0) {
  console.log("The number is positive.");
} else if (number < 0) {
  console.log("The number is negative.");
} else {
  console.log("The number is zero.");
}

const score = 82;

if (score >= 80) {
  console.log("Excellent");
} else if (score >= 60) {
  console.log("Pass");
} else {
  console.log("Keep practising");
}

const age = 20;
const hasPermission = true;

if (age >= 18 && hasPermission) {
  console.log("Both conditions are true.");
} else {
  console.log("At least one condition is false.");
}