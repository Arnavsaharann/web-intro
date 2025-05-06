const magicNumber = 42; 
console.log("Think of a number between 1 and 100. I will guess it! (For this demo, the number is " + magicNumber + ")");

let low = 1;
let high = 100;

while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    console.log("Is your number " + mid + "?");

    if (mid === magicNumber) {
        console.log("Found the Magic Number: " + mid);
        break;
    } else if (mid > magicNumber) {
        console.log("Number is less than " + mid);
        high = mid - 1;
    } else {
        console.log("Number is greater than " + mid);
        low = mid + 1;
    }
}