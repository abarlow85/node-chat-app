var socket = io();

socket.on('connect', function() {
	console.log('Connected to server');

});

socket.emit('createMessage', {
	from: 'Alec',
	text: 'blah blah blah'
});

socket.on('newMessage', function(newMessage) {
	console.log(newMessage);
});

socket.on('disconnect', function() {
	console.log('Disconnected from server');
});

