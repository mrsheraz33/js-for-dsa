// 1. Variables (let vs const)
const arraySize = 5; // no change
let pointer = 5;

// add 2 on pointer variable
pointer += 2;
console.log(arraySize, pointer);

// 2. Data Types & "Pass by Value"
let a = 30;
let b = a;

// increase b by 2
b = b + 2;
// you can see that a is not change but b
// is change and it's current value is 32
console.log(a, b);

// "Pass by Reference"
let array1 = [10, 20, 30];
let array2 = array1;

array2.push(40);
// so I changed only array2 but in array1 is also changed
// the Non-primitive value store only referance not actual value
console.log(array1, array2);

// 3. Operators (=== or %)

let num = 5;
let val = "5";

// check only value not data Type
console.log(num == val); // true
// check value and as well as data Type so always use
// strict equality operator to avoid a bug.
console.log(num === val); // false

// 4. Conditionals (if-else aur switch)
let arr = [10, 20, 30];
let index = 2;

if (index < 0 || index >= arr.length) {
  console.log("The index is out of arr");
} else {
  console.log(`The value of arr is :${arr[index]}`);
}

// switch is used for when your varable is hold a multiple values
let direction = "RIGHT";

switch (direction) {
  case "LEFT":
    console.log("Go back on the X-axis");
    break;
  case "RIGHT":
    console.log("Go ahead on the X-axis");
  case "UP":
    console.log("Go up on the y-axis");
  default:
    console.log("Invalid Direction");
}
