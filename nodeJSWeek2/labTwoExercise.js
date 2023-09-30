// Exercise 1
const gretter = (myArray, counter) => {
    const greetText = 'Hello '
    for (const names of myArray) {
        console.log(`${greetText}${names}`)
    }
}

gretter(['Randy Savage', 'Rick Flair', 'Hulk Hogan'], 3)

// Exercise 2
function capitalize(word) {
    const [firstLetter, ...otherLetters] = word
    return [firstLetter.toUpperCase(), ...otherLetters.join('').toLowerCase()].join('')
}

console.log(capitalize('javaScript'))
console.log(capitalize('fooBar'))
console.log(capitalize('noDeJs'))

// Exercise 3
function capitalizeColorArray(colorArray) {
    return colorArray.map(capitalize)
}

var colors = ['red', 'green', 'blue', 'yellow'];
capitalizedColors = capitalizeColorArray(colors)

console.log(capitalizedColors);

// Exercise 4
function filteredValues(array) {
    return array.filter((value) => value < 20);
}

var values = [1, 60, 34, 30, 20, 5];
const filterLessThanTwenty = filteredValues(values);

console.log(filterLessThanTwenty);

// Exercise 5
function sumOfArray(array) {
    return array.reduce((total, currentNum) => total + currentNum);
}
function productOfArray(array) {
    return array.reduce((total, currentNum) => total * currentNum);
}

var numbers = [1, 2, 3, 4];
const calculateSum = sumOfArray(numbers);
const calculateProduct = productOfArray(numbers);

console.log(calculateSum);
console.log(calculateProduct);

// Exercise 6
class Car {
    constructor(model, year) {
        this.model = model
        this.year = year
    }

    details() {
        return `Model: ${this.model} ${this.year}`
    }
}

class Sedan extends Car {
    constructor(model, year, balance) {
        super(model, year)
        this.balance = balance
    }

    info() {
        return `${this.model} has a balance of $${this.balance}`
    }
}

const car2 = new Car('Pontiac Firebird', 1976)
console.log(car2.details())
const sedan = new Sedan('Volvo SD', 2018, 30000)
console.log(sedan.info())