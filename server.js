var express = require("express")
var app = express()
var i = 0;

app.get('/', function (req, res) {
	i++
	res.end('hello world i = ' + i)
})

app.listen(3000, function(){
	console.log("App listening in port 3000")
})