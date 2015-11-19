var io;


module.exports = {
	init: init,
	emit: emit
};

function init(app) {
	io = require('socket.io')(app);

	io.on('connection', function (socket) {
		console.log('a user connected');
	});
}



function emit(data) {
	io.emit('Data Recieved', data);
}