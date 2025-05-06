function isPalindrome(num) {
    let strNum = num.toString();
    let reversedStr = "";

    for (let i = strNum.length - 1; i >= 0; i--) {
        reversedStr += strNum[i];
    }

    return strNum === reversedStr;
}

let num1 = parseInt(process.argv[2]);
let num2 = parseInt(process.argv[3]);

if (isNaN(num1) || isNaN(num2)) {
    console.log("Please provide two valid numbers");
} else {
    let isNum1Palindrome = isPalindrome(num1);
    let isNum2Palindrome = isPalindrome(num2);

    console.log(num1 + " is " + (isNum1Palindrome ? "" : "not ") + "a palindrome");
    console.log(num2 + " is " + (isNum2Palindrome ? "" : "not ") + "a palindrome");
}