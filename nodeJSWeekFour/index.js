var express = require('express')
const SERVER_PORT = 8089
var app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/", (req, res) => {
    // Response get sends and end together
    // res.send("Welcome to Express Web Server")
    res.setHeader("Content-Type", "text/plain")
    res.status(202).send("Welcome to Express Web Server")
    // res.send("<h1>Welcome to Express Web Server</h1>")
    // res.end("<h1>Welcome to Express Web Server</h1>")
})

// http://localhost:8089/student
app.get("/student", (req, res) => {
  const stud = {
    sid: 1,
    snm: "Abbas Said",
    method: "GET"
  }

  res.send(stud)
})

// http://localhost:8089/student
app.post("/student", (req, res) => {
  const stud = {
    sid: 1,
    snm: "Abbas Said",
    method: "POST",
    header: req.headers
  }

  // res.send(stud)
  res.json(stud)
})

// http://localhost:8089/faculty
app.get("/faculty", (req, res) => {
  res.send("Hello Faculty")
})

// PATH Parameter
// http://localhost:8089/employee/abbas/said
app.get("/employee/:fname/:lname", (req, res) => {
  const data = req.params

  // Store the keys and values in a variable
  let fnm = req.params.fname
  let lnm = req.params.lname

  res.send(data)
})

// http://localhost:8089/employee?fnm=abbas&lnm=said
app.get("/employee", (req, res) => {
  const data = req.query
  if(data.id === undefined) {
    res.send("Required id as a query param")
  }
  else {
    res.send(data)
  }
})

// Accept data as a body
// http://localhost:8089/hotels
app.get("/hotels", (req, res) => {
  const data = req.body
  res.send(data)
})


app.listen(SERVER_PORT, () => {
  console.log(`Server running at http://localhost:${SERVER_PORT}`)
})