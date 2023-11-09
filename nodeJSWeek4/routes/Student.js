var express = require('express')

var studentRoutes = express.Router()

studentRoutes.route("/")
    .get( (req, res) => {
        res.send("<h2>GET - Student</h2>")
    })
    .post( (req, res) => {
        res.send("<h2>POST - Student</h2>")
    })

studentRoutes.get("/fulltime" , (req, res)=>{
    res.send("<h2>GET - Full Time Student</h2>")
})

studentRoutes.post("/fulltime" , (req, res)=>{
    res.send("<h2>POST - Full Time Student</h2>")
})

studentRoutes.get("/parttime" , (req, res)=>{
    res.send("<h2>GET - Part Time Student</h2>")
})

module.exports = studentRoutes