console.log("hello");
function isOdd(number) {
    return !(parseFloat(number) % 2 === 0);
}
console.log(isOdd(5));

// Make a function named isEven(number)
function isEven(number) {
    return parseFloat(number) % 2 === 0;
}
console.log(isEven(9));
// Make a function named identity(input) that returns the input exactly as provided.
function identity(input) {
    return input;
}
console.log(identity(4.014));
console.log(identity("i hate pickles"));
//     Make a function named isFive(input)
function isFive(input) {
    return Boolean(input === 5);
}
console.log(isFive(5));
console.log(isFive("five"));

// Make a function named addFive(input) that adds five to some input.
function addFive(input) {
    return parseFloat(input) + 5;
}
console.log(addFive(45));
console.log(addFive("dog"));
//     Make a function named isMultipleOfFive(input)
function isMultipleOfFive(input) {
    return parseFloat(input) % 5 === 0;
}
console.log(isMultipleOfFive(45));
console.log(isMultipleOfFive(96));
// Make a function named isThree(input)
// Make a function named isMultipleOfThree(input)
// Make a function named isMultipleOfThreeAndFive(input)
// Make a function named isMultipleOf(target, n) which checks if target is evenly divisible by n
// Make a function named isTrue(boolean)
// Make a function named isFalse(boolean)
// Make a function named isTruthy(input), remember that values other than true will behave like true
// Make a function named isFalsy(input), remember that values other than false behave like false
// Make a function named isVowel(letter)