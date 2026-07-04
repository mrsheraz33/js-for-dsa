// Map & Set
// 1. Map (The Advanced Object)
const myMap = new Map();

myMap.set("apple", 30);
myMap.set("mango", 5);

if (myMap.has("apple")) {
  console.log(`${myMap.get("apple")}`);
}

console.log(myMap.size);

// 2. Set (The Unique Collection)
// set store only unique values
const number = [1, 2, 3, 4, 4, 6, 7, 2, 1, 1, 1, 4, 3, 3];
const uniqueValue = new Set(number)
console.log(uniqueValue);

// add new value
console.log(uniqueValue.add(40));

// check value if exist 
console.log(uniqueValue.has(3)); // true

// delete value
console.log(uniqueValue.delete(2)) // return true

// using Spread Operator
const newArray = [...uniqueValue]
console.log(newArray);
