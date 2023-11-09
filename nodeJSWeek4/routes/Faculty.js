var express = require('express')

var facultyRoutes = express.Router()

facultyRoutes.route("/")
    .get( (req, res) => {
        res.send("<h2>GET - Faculty</h2>")
    })
    .post( (req, res) => {
        res.send("<h2>POST - Faculty</h2>")
    })

facultyRoutes.get("/fulltime" , (req, res)=>{
    res.send("<h2>GET - Full Time Faculty</h2>")
})

facultyRoutes.post("/fulltime" , (req, res)=>{
    res.send("<h2>POST - Full Time Faculty</h2>")
})

facultyRoutes.get("/parttime" , (req, res)=>{
    res.send("<h2>GET - Part Time Faculty</h2>")
})

module.exports = facultyRoutes