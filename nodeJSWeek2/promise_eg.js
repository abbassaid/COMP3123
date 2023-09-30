function makePromise (x, y) {
    var p1 = new Promise((resolve, reject) => {
        if (x >= y) {
            resolve({msg: "Fulfilled"})
        } else {
            reject({msg: "Error"})
        }
    })
    return p1
}

// p1.then(() => {
//     console.log("Resolved")
// }, () => {
//     console.log("Rejected")
// })

// EITHER THE TOP OR THE BOTTOM CODE WORKS

// p1.then(() => {
//     console.log("Resolved")
// }).catch(() => {
//     console.log("Rejected")
// })

// We changed the promise to use a function instead so that we can add our own values
makePromise(10, 2).then((data) => {
    console.log("Resolved: " + JSON.stringify(data))
}).catch((err) => {
    console.log("Rejected: " + JSON.stringify(err)) // Used to show the actual code instead of the message
})

makePromise(10, 20).then((data) => {
    console.log("Resolved: " + data.msg)
}).catch((err) => {
    console.log("Rejected: " + err.msg)
})

makePromise(10, 2).then(data => {
    console.log("Resolved 1: " + JSON.stringify(data))
    return {...data, status : 200} // We used the return value so that when we call the then call again the data will not be undefined
}).then(data => {
    console.log("Resolved 2: " + JSON.stringify(data))
}).catch(error => {
    console.log("Rejected: " + JSON.stringify(error))
}).finally(() => {
    console.log("Finally")
})