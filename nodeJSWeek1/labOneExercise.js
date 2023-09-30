"use strict"

// Exercise 1
// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });
//
//
// readline.question(`Please enter a sentence: `, sentence => {
//     var words = sentence.split(" ")
//     console.log(`I will now capitalize each word in the sentence: `);
//     for (var i = 0; i < words.length; i++) {
//         words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1)
//     }
//     var newSentence = words.join(" ")
//     console.log(newSentence)
//     readline.close();
// });

// Exercise 2
// function largestNum (numOne, numTwo, numThree) {
//     let largestNumber = Math.max(numOne, numTwo, numThree)
//     return largestNumber
// }
//
// console.log(largestNum(1, 0, -1))
// console.log(largestNum(0, -10, -20))
// console.log(largestNum(1000, 510, 440))

// Exercise 3
// function flipThree (word) {
//     if (word.length >= 3) {
//         let threeChars = word.slice(-3)
//         word = word.slice(0, -3)
//         word = threeChars + word
//         return word
//     }
//     else {
//         return word
//     }
// }
//
// console.log(flipThree("Python"))
// console.log(flipThree("JavaScript"))
// console.log(flipThree("Hi"))



// Exercise 4
function typeOfAngle(number) {
    if (number >= 0 && number < 90) {
        return "Acute angle";
    } else if (number === 90) {
        return "Right angle";
    } else if (number > 90 && number < 180) {
        return "Obtuse angle";
    } else if (number === 180) {
        return "Straight angle";
    } else {
        return "Sorry I do not know that angle";
    }
}

console.log(typeOfAngle(47))
console.log(typeOfAngle(90))
console.log(typeOfAngle(145))
console.log(typeOfAngle(180))