// Q1
var number = parseFloat(prompt("Enter a positive integer:"));
if (isNaN(number) || number <= 0) {
    console.log("Please enter a valid positive integer.");
} else {
    var rounded = Math.round(number);
    var floored = Math.floor(number);
    var ceiled = Math.ceil(number);
    console.log('Number: ' + number);
    console.log('Round off value: ' + rounded);
    console.log('Floor value: ' + floored);
    console.log('Ceil value: ' + ceiled);
}

// Q2
var number = parseFloat(prompt("Enter a negative floating point number:"));
if (isNaN(number) || number >= 0) {
    console.log("Please enter a valid negative floating point number.");
} else {
    var rounded = Math.round(number);
    var floored = Math.floor(number);
    var ceiled = Math.ceil(number);
    console.log('Number: ' + number);
    console.log('Round off value: ' + rounded);
    console.log('Floor value: ' + floored);
    console.log('Ceil value: ' + ceiled);
}

// Q3
var number = parseFloat(prompt("Enter a number:"));
if (isNaN(number)) {
    console.log("Please enter a valid number.");
} else {
    var absoluteValue = number < 0 ? -number : number;
    console.log('Absolute value of ' + number + ' is ' + absoluteValue);
}

// Q4
var diceValue = Math.floor(Math.random() * 6) + 1;
console.log('Random dice value: ' + diceValue);

// Q5
var coinValue = Math.random() < 0.5 ? "heads" : "tails";
console.log('Random coin value: ' + coinValue);

// Q6
var randomNumber = Math.floor(Math.random() * 100) + 1;
console.log('Random number between 1 and 100: ' + randomNumber);

// Q7
var userInput = prompt("Enter your weight:");
var weight = parseFloat(userInput);
console.log('User weight: ' + weight + ' kilograms');

// Q8
var secretNumber = Math.floor(Math.random() * 10) + 1;
var userInput = parseInt(prompt("Guess the secret number (between 1 and 10):"));
if (userInput === secretNumber) {
    console.log("Congratulations! You guessed the secret number: " + secretNumber);
} else {
    console.log("Sorry, the secret number was: " + secretNumber);
}