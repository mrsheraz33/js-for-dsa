// Loops
// for Loop
// the for loop is used for when you known how many time loop will be run
const number = [10, 20, 30, 40]

for(let i = 0; i < number.length; i++){
    console.log(`Index: ${i} = value: ${number[i]}`);
}

// while Loop ---> Condition Based Loop
// the while loop is used for when you don't known how many time loop will run
let num = [1,2,3,4,5]
let start = 0
let end = num.length - 1  

while(start < end){

    let temp = num[start]
    num[start] = num[end]
    num[end] = temp

    start++
    end--
}

console.log(num)

// for...of Loop --> clean and modern
// This is used when you don't need index.

const prices = [100, 300, 50]
let totalSum = 0

for(let price of prices){
    totalSum += price
}

console.log(`The total price is : ${totalSum}`);
