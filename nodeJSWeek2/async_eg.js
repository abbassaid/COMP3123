async function sayHello(name) { //async is used to create promises
    return `Hello, ${name}`
}

var r = sayHello("Dug Dibadome").then(s => {
    console.log(s)
})

// console.log(r)

async function makePromise (x, y) {
    var p1 = new Promise((resolve, reject) => {
        if (x >= y) {
            resolve({msg: "Fulfilled"})
        } else {
            reject({msg: "Error"})
        }
    })
    return p1
}

async function makeAPICall() {
    console.log("-------START------")
    try {
        var result = await makePromise(10, 2)
        console.log(`C1: ${JSON.stringify(result)}`)
        var result = await makePromise(100, 20)
        console.log(`C2: ${JSON.stringify(result)}`)
    } catch(error) {
        console.log("*** Error ***")
    }
    console.log("-------END------")

}

makeAPICall()
makeAPICall()
makeAPICall()

