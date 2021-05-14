//array iteration

// .forEach()

// let prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99]

//list of instructions goes inside the forEach
// prices.forEach( (item, index) => {
//     let tax = (item * 0.0825).toFixed(2);
//     let total = (parseFloat(item) + parseFloat(tax)).toFixed(2);
//     output += `<p>Item number ${index + 1}. Price: $${item}. Tax: $${tax}. Total $${total}</p>`;
//     $('#output').html(output);
// });

// let output = " ";
// let prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];
// let pricesAfterTax = [];
//
// pricesAfterTax = prices.map(function (price) {
//     let tax = (price * 0.0825).toFixed(2);
//     let total = (parseFloat(price) + parseFloat(tax)).toFixed(2);
//     return parseFloat(total);
// })
//
// pricesAfterTax.forEach(function (item) {
//     output += `<p>${item}</p>`
//     $('#output').html(output);
// })
//
//
// let things = ["book", "pencil", "marker", "eraser"];
// let pluralThings = things.map((thing, index) => {
//     if (index === 0) {
//         output = "<p>You must bring the following items:</p>";
//     }
//     output += `<p>${thing}s</p>`;
//     $("#output").html(output);
// });

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let emails = users.map(user => user.email);
console.log(emails);
let trilinguals = users.filter(function (user) {
    return user.languages.length >=3
})
console.log(trilinguals);