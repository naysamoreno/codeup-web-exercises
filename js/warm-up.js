// function FizzBuzz (input) {
//     if (input % 3 === 0  && input % 5 === 0) {
//          return console.log("FizzBuzz")
//     } else if (input % 3 === 0) {
//         return console.log("Fizz")
//     } else if (input % 5 === 0) {
//         return console.log("buzz")
//     } else {return console.log(input)}
// }
// (() => {
//     const fizzBuzz = numTil => {
//         for (let x = 1; x <= numTil; x++) {
//             if (x % 3 === 0 && x % 5 === 0) {
//                 console.log("FizzBuzz")
//             } else if (x % 3 === 0) {
//                 console.log("Fizz")
//             } else if (x % 5 === 0) {
//                 console.log("buzz")
//             } else {
//                 console.log (x)
//             }
//         }
//     }
//     fizzBuzz(30);
// })
//
// function seven (input) {
//     if (typeof input === "string" || typeof input === "number") {
//         return console.log(7)
//     } else
//     return console.log(7)
// }
// seven('boop');
//
// //Davids answer
//
// const returnSeven = () => 7;
function timesFive(input) {
    if (typeof input === "number") {
        return input * 5;
    } else {
        return 0;
    }
}
// ES6
const x5 = (input) =>  typeof input === "number" ? input*5 : 0

console.log(timesFive(7))
console.log(timesFive("hello"))
