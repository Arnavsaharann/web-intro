let number = parseInt(process.argv[2]);

if (isNaN(number)) {
    console.log("Please provide a valid number (e.g., node problem1.js 5)");
} else if (number < 0 || number > 9) {
    console.log("Please provide a single-digit number (0-9)");
} else {
    let word;
    if (number === 0) {
        word = "Zero";
    } else if (number === 1) {
        word = "One";
    } else if (number === 2) {
        word = "Two";
    } else if (number === 3) {
        word = "Three";
    } else if (number === 4) {
        word = "Four";
    } else if (number === 5) {
        word = "Five";
    } else if (number === 6) {
        word = "Six";
    } else if (number === 7) {
        word = "Seven";
    } else if (number === 8) {
        word = "Eight";
    } else {
        word = "Nine";
    }

    console.log("Number in words:", word);
}