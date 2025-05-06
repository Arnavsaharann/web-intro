let numbers = [];

for (let i = 0; i < 5; i++) {
    let randomNum = Math.floor(Math.random() * 900) + 100; // 100 to 999
    numbers.push(randomNum);
}

console.log("Generated Numbers:", numbers);

let min = numbers[0];
let max = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
        min = numbers[i];
    }
    if (numbers[i] > max) {
        max = numbers[i];
    }
}

console.log("Minimum Value:", min);
console.log("Maximum Value:", max);