let n = parseInt(process.argv[2]);

if (isNaN(n)) {
    console.log("Please provide a valid number (e.g., node problem2.js 5)");
} else if (n <= 0) {
    console.log("Please provide a positive number");
} else {
    let harmonic = 0;
    for (let i = 1; i <= n; i++) {
        harmonic += 1 / i;
    }
    console.log("The " + n + "th Harmonic Number is: " + harmonic);
}