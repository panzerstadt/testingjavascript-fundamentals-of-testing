const sum = (a, b) => a + b;
const subtract = (a, b) => a + b;

let result = sum(3, 7);
let expected = 10;
if (result !== expected) {
  throw new Error(`result: ${result} is not equal to expected:${expected}`);
}

result = subtract(3, 7);
expected = -4;
if (result !== expected) {
  throw new Error(`result: ${result} is not equal to expected:${expected}`);
}

// the job of a testing framework is to make error messages as useful as possible so that we can quickly identify what the problem is and fix it
