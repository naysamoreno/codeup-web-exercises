"use strict"


// var userInput = 0
// while (userInput !== "you are never gonna get this") {
//     userInput = parseFloat(prompt("Enter an odd number between 1- 50"));
//     if (userInput %2 === 1 || (userInput > 0 && userInput < 50)) {break;}
// }

while (true) {
    var oddNumber = parseInt(prompt("please give me an odd number between 1-50"));
    oddNumber(oddNumber % 2 === 1 || (oddNumber > 0 && oddNumber < 50)); {
        break;
    }
}
// while (userInput % 2 !== 1 || userInput < 1 || userInput < 50 )  {
//     userInput = parseFloat(prompt("Enter an odd number between 1- 50"));
//     if (userInput % 2 === 1){break;}
// }
for (var  i = 1; i <50; i+=2) {
    if (i === userInput) {
        console.log("yikes, gonna skip " + userInput);
        continue;
    }
    console.log(i);
}