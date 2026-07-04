// ES6 Features
// 1. Destructuring
// Array Destructuring & Swapping
let a = 10;
let b = 20;

[a, b] = [b, a];
console.log(a, b);

// Object Destructuring
const user = {
  name: "sheraz",
  email: "sheraz@dev.com",
};

const { name, email } = user;
console.log(name, email);

// 2. Spread Operator
const original = [10, 20, 30];
const copy = [...original];
copy.push(40);

console.log(copy);
console.log(original);

// Example
const scores = [1, 3, 45, 6];
console.log(Math.max(...scores));

// 3. Rest Operator
const sumAll = (...number) => {
  return number.reduce((total, num) => total + num, 0);
};
console.log(sumAll(3, 55, 66, 7, 88, 9));

// 4. Template Literals

function greetUser(name) {
    return `Hello, ${name}`
}

console.log(greetUser("Usman"));
