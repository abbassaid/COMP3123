//"use strict" //is used to adhere to certain rules
console.log("Hello World")

var a = 100 // Used for global declaration
let b = 200 // Block scope (local scope)
const c = 300 // Unchangeable value in the local scope

a = "Hello" // Dynamic language, it changes the type automatically

//x

let d = "Money"

console.log(typeof (b))
console.log(typeof (d))

//Objects
var stud = {
    sid: 1,
    fnm: "Bob",
    lnm: "Ross",
    result: "Pass",
    "b date": "Birthdate",

    display() {
        console.log(this.fnm)
        console.log(this)
    },

    print: () => { // Arrow function
        console.log(this.lnm)
        console.log(this)
    }
}

console.log(typeof (stud))
console.log(stud)
stud.display()
stud.print() // arrow functions can not use the "this" keyword,
             // the arrow function is good for events

// Object Destruction
var {sid, fnm} = stud
console.log(sid)
console.log(fnm)

var eid = 100
var efnm = "First Name"
var elnm = "Last Name"

var emp = { // Constructs objects using variables
    //eid: eid,
    //fnm: efnm,
    //lnm: elnm
    eid, // instead of declaring and assigning, we can just use the variable names
    efnm,
    elnm
}

console.log(emp)
console.log(stud["result"]) // Using associative array to get the result
                            // Must use double quotes to call it

const r = "result"
// stud.r
console.log(stud[r])
console.log(stud["b date"])

var n = [1, 2, 3, 4, 5]
var res = n.map(x => x * 2)
console.log(res)
var res = n.map(x => x * 2 + "I")
console.log(n)
console.log(res)

var res = n.filter(x => x % 2)
console.log(res)

function display(x) {
    return x * 4
}

var res = n.map(display) // Can create a function and use that instead
console.log(res)

// Array
x = [100, 200, 300]
z = [n, x, 500, 600]
console.log(x)
console.log(z)

z = [...n, ...x, 500, 600]
console.log(z)

function sayHello(...a) {
    console.log(arguments) // can use either the key word arguments or ...
    console.log(a)
}

sayHello(1, 2, 3, 4, "Hello", "GBC")