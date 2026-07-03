// Functions
// 1. Function Declaration (The Traditional Way)
const result = greetUser("Sheraz");
console.log(result);

function greetUser(name) {
  return `Hello, ${name}!`;
}

// 2. Arrow Functions
const sortArray = [30, 4, 2, 60, 80, 70];

sortArray.sort((a, b) => {
  return a - b;
});

console.log(sortArray);

// 3. Parameters
const parameter = (arr, start = 0, end = arr.length - 1) => {
  return `search range: Index ${start} to ${end}`;
};

console.log(parameter([1, 3, 54, 6, 7]));

// 4. Return
const findTargetIndex = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
};

console.log(findTargetIndex([2, 4, 3, 6, 66], 3));
console.log(findTargetIndex([2, 4, 3, 6, 66], 88));

