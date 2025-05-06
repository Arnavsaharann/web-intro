let number = parseInt(process.argv[2]);

if (isNaN(number)) {
    console.log("Please provide a valid number");
} else if (number < 1 || number > 7) {
    console.log("Please provide a number between 1 and 7");
} else {
    let day;
    if (number === 1) {
        day = "Sunday";
    } else if (number === 2) {
        day = "Monday";
    } else if (number === 3) {
        day = "Tuesday";
    } else if (number === 4) {
        day = "Wednesday";
    } else if (number === 5) {
        day = "Thursday";
    } else if (number === 6) {
        day = "Friday";
    } else {
        day = "Saturday";
    }

    console.log("Day of the week:", day);
}