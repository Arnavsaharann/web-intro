let n = parseInt(process.argv[2]);

if (isNaN(n)) {
    console.log("Please provide a valid number (e.g., node problem1.js 10)");
} else if (n < 0) {
    console.log("Please provide a non-negative number");
} else {
    console.log("Table of Powers of 2 up to 2^" + n + " or until 256 is reached:");
    let i = 0;
    let power = 1; // 2^0 = 1

    while (i <= n && power <= 256) {
        console.log("2^" + i + " = " + power);
        i++;
        power = Math.pow(2, i);
    }
}