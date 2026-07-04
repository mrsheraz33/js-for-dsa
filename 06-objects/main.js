// Objects
// 1. Create or Access Object

const student = {
    name: "Sheraz",
    rollNo: 30,
    isGraduated: false
}

console.log(student.name); // Dot Notation
console.log(student["rollNo"]); // Bracket Notation

// 3. Update & Add
const player = {
    name : "Ali",
    score: 30
}

// update the key
player.score = 50

// Add new key 
player.team = "Pakistan"
console.log(player);


// 4. Delete 

const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2022
}

delete car.year  // delete year key 
console.log(car);

// 5. Loop Through Properties
const obj = {
    a: 1,
    b: 3,
    c: 5
}

for(let key in obj){
    console.log(`${key} = ${obj[key]}`);
}