// Arrays
// 1. Access
const num = [10, 20, 30, 40]
console.log(num[2]);
console.log(num[3]);

// 2. push aur pop
const stack = [10, 20]
stack.push(30)
console.log(stack)

const removeElement = stack.pop()
console.log(`Remove Item: ${removeElement}`)
console.log(stack)

// 3. shift aur unshift
const queue = [20, 40, 50]
queue.unshift(10)
console.log(queue)

const removeTop = queue.shift() // remove 10
console.log(queue);

// 4. slice vs splice
const mainArray = ["A", "B", "C", "D"]
const subArray = mainArray.slice(1,3) // last index is not include
console.log(subArray) // return a new array
console.log(mainArray)

let numbers = [10, 20, 30, 40];
numbers.splice(1, 2, 90)

console.log(numbers)

// 5. sort aur reverse
const sortArray = [50, 40, 30, 20, 10]

sortArray.sort((a, b)=> a - b)
console.log(sortArray);

const reverseArray = [1, 2, 3, 4, 5]
reverseArray.reverse()
console.log(reverseArray);

// 6. includes aur indexOf
const dynamicArray = ["apple", "mango", "banana"];

console.log(dynamicArray.includes("apple")); // true
console.log(dynamicArray.includes("orange")); // false

console.log(dynamicArray.indexOf("mango")) // 1
console.log(dynamicArray.indexOf("orange")) // -1

