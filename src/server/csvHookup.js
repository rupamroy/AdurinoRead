var csv = require('csv-write-stream')
var writer = csv()
var fs = require('fs');

module.exports = {
	init: init,
	write: write
}


function init() {
	writer.pipe(fs.createWriteStream('logs/Out-' + (new Date()).toLocaleDateString() + '.csv'));
}


function write(data, entered) {
	writer.write({ Data: data, Entered: entered })
}