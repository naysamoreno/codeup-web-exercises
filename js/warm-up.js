// function FizzBuzz (input) {
//     if (input % 3 === 0  && input % 5 === 0) {
//          return console.log("FizzBuzz")
//     } else if (input % 3 === 0) {
//         return "Fizz"
//     } else if (input % 5 === 0) {
//         return "buzz"
//     } else {return input}
// }
(() => {
    const fizzBuzz = numTil => {
        for (let x = 1; x <= numTil; x++) {
            if (x % 3 === 0 && x % 5 === 0) {
                 console.log("FizzBuzz")
            } else if (x % 3 === 0) {
                 console.log("Fizz")
            } else if (x % 5 === 0) {
                 console.log("buzz")
            } else {
                 console.log (x)
            }
        }
    }
 fizzBuzz(30);
})
