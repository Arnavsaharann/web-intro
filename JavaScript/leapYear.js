let year = parseInt(process.argv[2]);

if (isNaN(year)) {
    console.log("Please provide a valid year");
} else if (year < 1000 || year > 9999) {
    console.log("Please provide a 4-digit year");
} else {
    let isLeapYear = false;
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                isLeapYear = true;
            }
        } else {
            isLeapYear = true;
        }
    }

    if (isLeapYear) {
        console.log(year + " is a Leap Year");
    } else {
        console.log(year + " is not a Leap Year");
    }
}