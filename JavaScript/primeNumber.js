let number = parseInt(process.argv[2]);

if (isNaN(number)) {
    console.log("Please provide a valid number (e.g., node problem3.js 7)");
} else if (number < 0) {
    console.log("Please provide a non-negative number");
} else {
    let isPrime = true;    
    if (number < 2) {
        isPrime = false;
    } else {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }
    }
    if (isPrime) {
        console.log(number + " is a Prime Number");
    } else {
        console.log(number + " is not a Prime Number");
    }
}