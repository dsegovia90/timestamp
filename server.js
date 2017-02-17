var express = require("express")
var app = express()

var output = {
	"unix": 0,
	"natural": ""
}

console.log(output)

function outputNaturalDate(date) {
	months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
	return months[date.getMonth()] + " " + (date.getDate() + 1) + ", " + date.getFullYear()
}

app.set('port', (process.env.PORT || 5000))

app.get('/:time', function (req, res) {
	time = req.params.time

	if ((/^\d+/g).test(time)) {
		console.log("1st")
		output.unix = parseInt(time)
		output.natural = outputNaturalDate(new Date(time*1000))
	}else if ((/^(January|February|March|April|May|June|July|August|September|October|November|December)\s\d+,\s\d+/g).test(time)) {
		console.log("2nd")
		output.unix = Date.parse(time)/1000
		output.natural = time
	}else{
		console.log("3rd")
		output.unix = null
		output.natural = null
	}
		res.end(JSON.stringify(output))
})

app.listen('port', function() {
  console.log('Node app is running on port', app.get('port'));
});