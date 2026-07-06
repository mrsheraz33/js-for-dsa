// Recursion
function factorial(n) {
  // base case
  if (n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}
console.log(factorial(5));

// 1. Example
function sumOfNumbers(n) {
  if (n === 1) return 1;
  return n * sumOfNumbers(n - 1);
}

console.log(sumOfNumbers(3));

// 2. Example
function reverseString(str) {
  if (str === "") {
    return "";
  }
  return reverseString(str.slice(1)) + str[0];
}

console.log(reverseString("Animal"));
