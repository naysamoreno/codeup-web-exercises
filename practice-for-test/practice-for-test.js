function showNumberOfCharacters() {
    var askString = prompt("Say something")
    while (!askString) askString = prompt("SAy SOMETHING STUOPUD")
    console.log(askString.length, askString)
}

function showNumberOfCharactersELSE() {
    var askString = prompt("Say something")
    if (!askString) showNumberOfCharactersELSE()
    else console.log(askString.length, askString)
}

const log = (...args) => args.forEach(arg => {
    const header = document.createElement('h3')
    header.innerHTML = arg
    document.body.append(header)
});

const logFunction = (func, ...args) => log(`${func.name}(${args.join(', ')}): ${func(...args)}`);


// Mad Lib
//
// Mad libs are a simple game where you create a story template with blanks for words. You, or another player, then construct a list of words and place them into the story, creating an often silly or funny story as a result.
//
//     Create a simple mad-lib program that prompts for a noun, a verb, an adverb, and an adjective and injects those into a story that you create.
//
//     Example Output
//
// Enter a noun: dog
// Enter a verb: walk
// Enter an adjective: blue
// Enter an adverb: quickly
// Do you walk your blue dog quickly? That's hilarious!
// Constraints

// Use a single output statement for this program.
//     If your language supports string interpolation or string substitution, use it to build up the output.
function madlibs() {
    var noun = prompt("Enter a noun")
    var verb = prompt("Enter a verb")
    var adjective = prompt("Enter an adjective")
    var adverb = prompt("Enter an adverb")
    var madlib = "Do you " + verb + " your " + adjective + " " + noun + " " + adverb;
    log(madlib)
    return madlib
}
function isTruthy(boolean) {
    return !!boolean
};
function isTruthy(boolean) {
    if(boolean) {
        return true
    } else {
        return false
    }
};

function isTrue(boolean) {
    if(boolean === true) {
        return true
    } else {
        return false
    }
};


log(isTruthy(1));
log(isTrue(true));
log(isTrue(0));
log(isTrue(1));

function isVowel(letter) {
    var lowerCased = letter.toLowerCase()
    if (lowerCased === "a" || lowerCased === "e" || lowerCased === "i" || lowerCased === "o" || lowerCased === "u") {
        return true;
    } else {
        return false;
    }
};
logFunction(isVowel, "R");
logFunction(isVowel,"a");
logFunction(isVowel,"A");

function isVowelArray(letter) {
    var lowerCased = letter.toLowerCase();
    var vowels = ["a" , "e" , "i" , "o" , "u"];
    // return vowels.includes(lowerCased);
    for(var i = 0; i<vowels.length; i++){
        var vowel = vowels[i];
        if (lowerCased === vowel) {
            return true;
        }
    };
    return false;
};

function hasLowerCase(word) {
    for(var i = 0; i<word.length; i++){
        var letter = word[i];
        if (letter === letter.toLowerCase()) {
            return true;
        }
    };
    return false;
};

function allAreLowerCase(word) {
    for(var i = 0; i<word.length; i++){
        var letter = word[i];
        if (letter === letter.toUpperCase()) {
            return false;
        }
    };
    return true;
};

function isConsonant(letter) {
    return !isVowel(letter);
}

logFunction(isVowelArray, "R");
logFunction(isVowelArray,"a");
logFunction(isVowelArray,"A");
logFunction(isVowelArray,"e");

function isCapital(letter) {
    if (letter === letter.toUpperCase()) {
        return true;
    } else {
        return false;
    }
}
logFunction(isCapital, "RR")

log(Math.floor(Math.random() * 22 + 40));

function rollDice(sides) {
    return Math.floor(Math.random() * sides + 1);
}

new Array(1000).fill().forEach(() => {
    var diceRoll = rollDice(6);
    if(diceRoll > 6) alert('WRONG');
    else log(diceRoll);
});

// # JavaScript Basics Assessments
//
// ## Main Concepts to be Assessed
// - JavaScript Primitive Types
// - JavaScript Operators
// - JavaScript Variables
// - JavaScript with HTML
// - JavaScript Functions
// - JavaScript Conditionals
//
// ## Skills Not Currently Being Assessed
// - HTML Elements
// - HTML Forms
// - CSS
//
// ## JavaScript Basics Checklist
// The following are several points of competency and skill that are intended to help identify areas of additional practice and study. Not all answers are found in the Codeup curriculum.
//
//     ### Knowledge
// - [ ] I can identify the primitive data types of JavaScript.
// - [ ] I can identify the comparison operators of JavaScript.
// - [* ] I can identify the logical boolean operators of JavaScript.
// - [ ] I can identify the arithmetic operators of JavaScript.
// - [ ] I can explain the various functions that can be used when working with strings.
// - [ ] I can identify the various parts of a function.
// - [ ] I can identify the differences between various conditional statements.
//
//     ### Skills
// - [ ] I can make use of variables in JavaScript.
// - [ ] I can make use of different operators to reach a desired outcome.
// - [ ] I can write JavaScript code that will run under certain conditions.
// - [ ] I can create functions in JavaScript.
// - [ ] I can create functions that return different data dependent upon different conditions.
