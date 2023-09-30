var msg = require("./message")
var arit = require("./arithmetic")

var {sum, Student} = require("./arithmetic")
var Employee = require("./Employee")

var welcome = require("./college")

//console.log(module)
//console.log(global)

console.log(msg)
console.log(
    msg.sayHello("Abbas")
)
console.log(msg.college)

console.log(arit)
console.log(arit.sum(10, 5))
// Uses imports instead of exports
console.log(sum(100, 5))
console.log(arit.sub(10, 5))
console.log(arit.mul(10, 5))

var s1 = new arit.Student(1000000, "Abbas")
s1.print()

var s2 = new Student(1000001, "Mr.Rodger")
s2.print()

var e1 = new Employee("2000000", "Franky")
console.log(e1)

console.log(welcome)