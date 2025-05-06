let n = parseInt(process.argv[2]);

if (isNaN(n)) {
    console.log("Please provide a valid number");
} else if (n < 0) {
    console.log("Please provide a non-negative number");
} else {
    console.log("Table of Powers of 2 up to 2^" + n + ":");
    for (let i = 0; i <= n; i++) {
        let power = Math.pow(2, i);
        console.log("2^" + i + " = " + power);
    }
}