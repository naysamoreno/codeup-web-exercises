"use strict";
console.log("Hello from external JavaScript");
var message = "welcome to my Website";
alert(message);
var favoriteColor = prompt("What is your favorite Color?");
alert(favoriteColor + " is my favorite color too");
var cost = 3;
var lm = parseFloat(prompt("How many days would you like to rent the little mermaid for?"));
var bb = parseFloat(prompt("How many days would you like to rent the Brother bear for?"));
var h = parseFloat(prompt("Have you heard about the movie Hercules? How many days would you like to rent that one?"));
var total = (lm + bb + h) * cost;
alert("your total is going to be " + total);

var gg = parseFloat(prompt("you get paid 400$ per hour at Google how many hours would you like to work?"));
var am = parseFloat(prompt("you get paid 380$ per hour at Google how many hours would you like to work?"));
var fb = parseFloat(prompt("you get paid 350$ per hour at Google how many hours would you like to work?"));
var gr = 400
var ar = 380
var fr = 350
var totalHrs = ((gg * gr) +(am * ar) +(fb * fr));
alert("based on the hours you chose you will make " + totalHrs + " dollars in a week")

// A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.
var classSize = parseFloat(prompt("How many people are in your cohort at Codeup?"));
var studentsSignedUp = parseFloat(prompt("How many people are signed up and registered for class?"));
var classTime = parseFloat(prompt("What is your preferred time to go to class? We will tell you if it fits in your schedule. 9? 10? or 12?"));
var noConflict = classTime <= 12;
var classOpen = classSize > studentsSignedUp;
var canRegister = noConflict && classOpen;
alert("You are allowed to register: " + canRegister);

/**
 * A product offer can be applied only if a person buys more than 2 items, and the offer has not expired.
 * Premium members do not need to buy a specific amount of products.
 *
 * When the exercise asks you to use a number, instead use a prompt to ask the user for that number.
 * Use an alert to show the results of each problem.
 */

var options = "\n0: no \n1: yes"
var numberOfItems = parseFloat(prompt("you can only buy more than two items to get the discount how many items would you like to buy?"));
var offerIsExpired = parseFloat(prompt("Is the offer expired?" + options));
var isPremiumMember = parseFloat(prompt("Are you a premium member?" + options));

var hasEnoughItems = numberOfItems > 2;
var canBuy = (isPremiumMember || hasEnoughItems) && !offerIsExpired;
alert("Can you buy: " + canBuy);





