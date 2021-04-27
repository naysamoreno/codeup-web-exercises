"use strict"

var number = 7;
function showMultiplicationTable() {
    for(var multiplier = 1; multiplier < 10; multiplier++) {
        console.log(number + " x " + multiplier + " = " + (number * multiplier));
    }
}
showMultiplicationTable(7);
for (var i=0; i<10; i++) {
    var randNum = Math.floor(Math.random() * 181 + 20);
    if (randNum % 2 === 0) {
        console.log(randNum + " its Even!");
    }
    else {
        console.log(randNum + " its odd!")
    }
}
// fancy way
// function randomIntFromInterval(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }
// var random, evenOddString;
// for (var i = 0; i < 10; i++) {
//     random = randomIntFromInterval(20, 200);
//     evenOddString = (random % 2 === 0) ? "even" : "odd";
//     console.log(random + " is " + evenOddString);
// }
// for (var i=0; i<9; i++) {
//     var increaseNum = ('');
//     for (var n = 0; n <= i; n++) {
//         increaseNum = increaseNum + (i + 1) + "";
//     }
//     console.log(increaseNum);
// }
// VERY FANCY
// function range(start = 0, end) {
//     const num = (end + 1) - start
//     return new Array(num).fill().map((_, index) => start + index);
// }
//
// const NUM = 9;
// const RANGE = range(1, NUM);
// for(var num of RANGE) {
//     var numberString = new Array(num).fill().map(() => ''+num).join('');
//     console.log(numberString);
// }
// function sayHello () {
//     alert("hello world!");
// }
// sayHello();

// for (var i = 100; i > 0;i = i - 5) {
//     console.log(i)
// }

// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999
for (var i = 1; i <=9; i++) {
    let str = ""
    for (var j = 1; j <= i; j++) {
        str += i
    }
    console.log(str)
}
//
/*

 */