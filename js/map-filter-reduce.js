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

let totalYearsExperience = users.reduce(function (total, user) {
    let yearsExperience = user.yearsOfExperience;
    return total + yearsExperience;
}, 0)
console.log(totalYearsExperience);

// es6
totalYearsExperience = users.reduce((total, user) => total + user.yearsOfExperience, 0)

console.log(totalYearsExperience);


// most condensed
// let longestUserEmail = emails.reduce((a, b) => a.length > b.length ? a : b);
//
// console.log(longestUserEmail)

const longestEmails = users.reduce((longest, current) =>
    longest.email.length > current.email.length ? longest : current ).email;

console.log(longestEmails)

let usersString = users.reduce((accu, user, index) => {
    return index === 0 ? user.name : accu + ", " + user.name;
}, "");
console.log("The instructors are: " + usersString);

console.log(usersString)


let uniqueArray = users.reduce(function (nameArray, user, index, array) {
    nameArray.push(...user.languages); //Using the .push(...Array) separates the array when we push it rather than pushing it normally, and using .push(Array), where we would get an array inside of an array.
    // nameArray = nameArray.concat(user.languages); //Using the concat method we can combine arrays, back to back.
    // nameArray = [...nameArray,...user.languages];
    // console.log(nameArray);
    if (index === array.length - 1) {
        // return getUniqueValues(nameArray);
        return [... new Set(nameArray)].sort(); // Set creates a new array with the unique values
    } else {
        return nameArray;
        // return getUniqueValues(nameArray);
    }
}, []);
console.log(uniqueArray);