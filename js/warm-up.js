// function FizzBuzz (input) {
//     if (input % 3 === 0  && input % 5 === 0) {
//          return console.log("FizzBuzz")
//     } else if (input % 3 === 0) {
<<<<<<< HEAD
//         return "Fizz"
//     } else if (input % 5 === 0) {
//         return "buzz"
//     } else {return input}
=======
//         return console.log("Fizz")
//     } else if (input % 5 === 0) {
//         return console.log("buzz")
//     } else {return console.log(input)}
>>>>>>> f6e02d7 (fizzBuzz warmup)
// }
(() => {
    const fizzBuzz = numTil => {
        for (let x = 1; x <= numTil; x++) {
            if (x % 3 === 0 && x % 5 === 0) {
<<<<<<< HEAD
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
=======
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
>>>>>>> f6e02d7 (fizzBuzz warmup)
})
