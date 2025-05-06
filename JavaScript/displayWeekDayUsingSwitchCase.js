let number = parseInt(process.argv[2]);

if (isNaN(number)) {
    console.log("Please provide a valid number");
} else if (number < 1 || number > 7) {
    console.log("Please provide a number between 1 and 7");
} else {
    let day;
    switch (number) {
        case 1:
            day = "Sunday";
            break;
        case 2:
            day = "Monday";
            break;
        case 3:
            day = "Tuesday";
            break;
        case 4:
            day = "Wednesday";
            break;
        case 5:
            day = "Thursday";
            break;
        case 6:
            day = "Friday";
            break;
        case 7:
            day = "Saturday";
            break;
        default:
            day = "Invalid";
            break;
    }

    console.log("Day of the week:", day);
}