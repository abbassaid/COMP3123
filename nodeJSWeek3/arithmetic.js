var add = (a, b) => {
    return a + b
}

var sub = (a, b) => {
    return a - b
}

var mul = (a, b) => {
    return a * b
}

class Student {
    constructor(sid, snm) {
        this.sid = sid
        this.snm = snm
    }

    print() {
        console.log(this.sid)
        console.log(this.snm)
    }
}

// If you add
module.exports = {sum:add, sub, mul, Student}