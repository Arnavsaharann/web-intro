let choice = parseInt(process.argv[2]); // 1 for C to F, 2 for F to C
let temp = parseFloat(process.argv[3]); 

if (isNaN(choice) || isNaN(temp)) {
    console.log("Please provide valid inputs");
    console.log("Choice: 1 for Celsius to Fahrenheit, 2 for Fahrenheit to Celsius");
} else if (choice !== 1 && choice !== 2) {
    console.log("Please provide a valid choice (1 for Celsius to Fahrenheit, 2 for Fahrenheit to Celsius)");
} else {
    let result;
    let isValid = true;

    switch (choice) {
        case 1: // Celsius to Fahrenheit
            if (temp < 0 || temp > 100) {
                console.log("Temperature must be between 0°C and 100°C");
                isValid = false;
            } else {
                result = (temp * 9/5) + 32;
                console.log(temp + "°C is equal to " + result + "°F");
            }
            break;
        case 2: 
            if (temp < 32 || temp > 212) {
                console.log("Temperature must be between 32°F and 212°F");
                isValid = false;
            } else {
                result = (temp - 32) * 5/9;
                console.log(temp + "°F is equal to " + result + "°C");
            }
            break;
        default:
            console.log("Invalid choice");
            isValid = false;
            break;
    }
}