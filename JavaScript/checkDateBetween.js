let day = parseInt(process.argv[2]);
let month = parseInt(process.argv[3]);

if (isNaN(day) || isNaN(month)) {
    console.log("Please provide valid day and month");
} else {
    let isSpring = false;

    if (month > 3 && month < 6) {
        isSpring = true;
    } else if (month === 3 && day >= 20) {
        isSpring = true;
    } else if (month === 6 && day <= 20) {
        isSpring = true;
    }

    console.log("Is the date between March 20 and June 20? " + isSpring);
}