let number = parseInt(process.argv[2]);

if (isNaN(number)) {
    console.log("Please provide a valid number (e.g., node problem1.js 5)");
} else if (number < 0 || number > 9) {
    console.log("Please provide a single-digit number (0-9)");
} else {
    let word;
    switch (number) {
        case 0:
            word = "Zero";
            break;
        case 1:
            word = "One";
            break;
        case 2:
            word = "Two";
            break;
        case 3:
            word = "Three";
            break;
        case 4:
            word = "Four";
            break;
        case 5:
            word = "Five";
            break;
        case 6:
            word = "Six";
            break;
        case 7:
            word = "Seven";
            break;
        case 8:
            word = "Eight";
            break;
        case 9:
            word = "Nine";
            break;
        default:
            word = "Invalid";
            break;
    }

    console.log("Number in words:", word);
}