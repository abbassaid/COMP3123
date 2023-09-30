const express = require('express')
const app = express()
const port = 3000

app.get("/hello", (req,res) => {
    res.send('Hello Express JS')
})

app.get("/user", (req,res) => {

    const { firstname, lastname } = req.query

    const user = {
        firstname,
        lastname
    }

    res.json(user)
})


app.post("/user/:firstname/:lastname", (req, res) => {

    const { firstname, lastname } = req.params

    const user = {
        firstname,
        lastname
    }

    res.json(user)
})

app.listen(port, () => console.log(`Express app running on port ${port}!`));