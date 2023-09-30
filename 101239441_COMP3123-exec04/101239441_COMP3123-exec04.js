const express = require('express')
const app = express()
const port = 3000

app.get("/hello", (req,res) => {
    res.send('Hello Express JS')
})

app.get("/user", (req,res) => {
    // Seeing if the first name and last name was sent as a query
    const { firstname, lastname } = req.query

    // Storing it in a user object
    const user = {
        firstname,
        lastname
    }

    // If there is no firstname and last name defined we will send an error
    // message for them
    if (user.firstname === undefined || user.lastname === undefined) {
        res.send("Required firstname and lastname as query parameter")
    }
    else {
        res.json(user)
    }
})


app.post("/user/:firstname/:lastname", (req, res) => {

    const { firstname, lastname } = req.params

    const user = {
        firstname,
        lastname
    }

    res.json(user)
})

app.listen(port, () => console.log(`Express app running on http://localhost:${port}!`));