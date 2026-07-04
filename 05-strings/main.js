// Strings 
// 1. length
const name = "Hello, Sheraz"
console.log(name.length); // also include space

// 2. slice vs substring
let text = "javaScript"
let newText = text.slice(0, 4)

console.log(newText);
console.log(text.slice(-6));

 // 4 means ---> 0 
// substring negative value consider --> 0
let newStr = text.substring(-4, 4)
console.log(newStr);

// 3. split aur join
let sentence = "Love Coding JavaScript";
let wordArray = sentence.split(" ")
console.log(wordArray);

// reverse
wordArray.reverse()

let newSentence = wordArray.join(" ")
console.log(newSentence);

// 4. replace
const message = "bad apple, bad day"
const newMethod = message.replace("bad", "good")
console.log(newMethod);

console.log(message.replaceAll("bad" , "good"));

// 5. trim
const data = "   Hello world!   "
let newData = data.trim() // remove the space 

console.log(newData);
