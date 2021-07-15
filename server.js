const express = require('express')
const app = express()
const port = process.env.PORT || 8000
const path = require("path")

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'))
});

app.listen(port)
console.log(`App started on localhost:${port}`)