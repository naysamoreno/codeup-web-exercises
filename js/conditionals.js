"use strict";

/* ########################################################################## */

/**
 * TODO:
 *
 *
 *
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */


// function analyzeColor(color) {
//     if (color.toLowerCase() === "red") {
//          return 'red like raspberries';
//     } else if (color.toLowerCase() === "orange") {
//         return 'orange like oranges';
//     } else if (color.toLowerCase() === "yellow") {
//         return 'yellow like sunflowers';
//     } else if (color.toLowerCase() === "green") {
//         return 'green like shrek';
//     } else if (color.toLowerCase() === "blue") {
//         return 'blue like ocean';
//     } else if (color.toLowerCase() === "indigo") {
//         return 'indigo like jeans';
//     } else {
//         return 'I do not know anything about ' + color;
//     }
// }
//
// console.log(analyzeColor("green"));;
// console.log(analyzeColor("red"));;
// console.log(analyzeColor("apples"));;

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
// console.log(analyzeColor(randomColor));
 /** TODO:
 // * Refactor your above function to use a switch-case statement
 // */
// function analyzeColor(colors) {
//     switch (colors) {
//         case "red":
//            return 'red like raspberries';
//            break;
//         case "orange":
//             return 'orange like oranges';
//             break;
//         case "yellow":
//             return 'yellow like sunflowers';
//             break;
//         case "green":
//             return 'green like shrek';
//             break;
//         case "blue":
//             return 'blue like ocean';
//             break;
//         default:
//             return 'I do not know anything about ' + colors;
//             break;
//     }
// }
// console.log(randomColor);
// console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */
// var chosenColor = prompt("What is your favorite color?").toLowerCase();
// alert(analyzeColor(chosenColor));


/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
//  */

function calculateTotal(luckyNum) {
    if (luckyNum === 0) {
        return ("no discount");
    } else if (luckyNum === 1){
        return ('your total came out to ' + (totalBill * .90) + ' Dollars thanks to your 10% discount');
    } else if (luckyNum === 2) {
        return ('your total came out to ' + (totalBill * .75) + ' Dollars thanks to your 25% discount');
    } else if (luckyNum === 3){
        return ('your total came out to ' + (totalBill * .65) + ' Dollars thanks to your 35% discount');
    } else if (luckyNum === 4){
        return ('your total came out to ' + (totalBill * .50) + ' Dollars thanks to your 50% discount');
    } else if (luckyNum === 5){
        return ("Its your lucky day! your total came out to " + (totalBill - totalBill) + " Dollars aka FREE!");
    } else {
        return "Sorry not sure how to respond to that.";
    }
}

// console.log(calculateTotal(1,12));
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
var totalBill = parseFloat(prompt("What was the total of your bill?"));
console.log(luckyNumber);
alert(calculateTotal(luckyNumber));

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

var numberPls = confirm("would you like to enter a number?");

// if (numberPls) {
//     var userNumber = parseFloat(prompt("please enter a number."));
//     if (isNaN(userNumber)) {
//         alert(userNumber + " is not a number");
//     } else {
//         if (userNumber % 2 === 0) {
//             alert(userNumber + " is even");
//         } else {
//             alert(userNumber + " is an odd number");
//         }
//         if (userNumber > 0) {
//             alert("your number is positive");
//         } else {
//             alert("your number is negative");
//         }
//         alert(userNumber + 100 + " this is what your number is when you add 100");
//     }
// else
//     {
//         alert("ok, bye.");

var numberEntry;

function isOddOrEven (numberEntry) {
    return (numberEntry % 2 === 0) ? "this number is even" : "this number is odd";
}

function isNegativeOrPositive (numberEntry) {
    return (numberEntry > 0) ? "this number is positive" : "this number is negative";
}
function plus100 (numberEntry) {
    return "your number is " + parseFloat(numberEntry + 100) + "if we add 100";
}

if(numberPls) {
    numberEntry = prompt("please enter a number");
    if(isNaN(numberEntry)) {
        alert("this is not a number");
    } else {
        alert(isOddOrEven(numberEntry));
        alert(isNegativeOrPositive(numberEntry));
        alert(plus100(numberEntry));
    }
} else {
    alert("fine... bye")
}