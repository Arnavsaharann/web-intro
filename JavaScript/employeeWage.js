const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const MAX_WORKING_DAYS = 20;
const MAX_WORKING_HOURS = 160;
const FULL_TIME_WAGE = FULL_TIME_HOURS * WAGE_PER_HOUR;
const PART_TIME_WAGE = PART_TIME_HOURS * WAGE_PER_HOUR;

function getWorkHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            console.log("Employee is Part-Time");
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            console.log("Employee is Full-Time");
            return FULL_TIME_HOURS;
        case IS_ABSENT:
            console.log("Employee is Absent");
            return 0;
        default:
            console.log("Invalid employee check");
            return 0;
    }
}

let totalWage = 0;
let totalHours = 0;
let day = 1;
let dailyWageMap = new Map(); // Map to store day-wise wages

while (day <= MAX_WORKING_DAYS && totalHours < MAX_WORKING_HOURS) {
    let empCheck = Math.floor(Math.random() * 3);
    let empHours = getWorkHours(empCheck);
    
    if (totalHours + empHours > MAX_WORKING_HOURS) {
        empHours = MAX_WORKING_HOURS - totalHours;
    }
    
    totalHours += empHours;
    let dailyWage = empHours * WAGE_PER_HOUR;
    dailyWageMap.set(day, dailyWage); // Store in Map
    totalWage += dailyWage;
    console.log(`Day ${day}: Hours = ${empHours}, Daily Wage = $${dailyWage}`);
    day++;
}

// UC8: Using Map
console.log("\n--- UC8: Map Operations ---");
console.log("Day-wise Wages Map: ", Array.from(dailyWageMap.entries()));

// Compute total wage using Map
let totalWageFromMap = Array.from(dailyWageMap.values()).reduce((total, wage) => total + wage, 0);
console.log("Total Wage (using Map): $" + totalWageFromMap);