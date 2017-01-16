const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage} = require('./utils/message');
const publicPath = path.join(__dirname, '../public');
const PORT = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
	console.log('New user connected');

	socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'));

	socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined'));

	socket.on('createMessage', (newMessage) => {
		io.emit('newMessage', generateMessage(newMessage.from, newMessage.text));
	});

	socket.on('disconnect', (socket) => {
		console.log('User was disconnected');
	});
});


server.listen(PORT, () => {
	console.log('Server up on port', PORT);
});