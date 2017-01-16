const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');


const publicPath = path.join(__dirname, '../public');
const PORT = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
	console.log('New user connected');

	socket.emit('newMessage', {
		from: 'Admin',
		text: 'Welcome to the chat app',
		createdAt: new Date().getTime()
	});

	socket.broadcast.emit('newMessage', {
		from: 'Admin',
		text: 'New user joined',
		createdAt: new Date().getTime()
	});

	socket.on('createMessage', (newMessage) => {
		newMessage.createdAt = new Date().getTime();
		console.log(newMessage);
		io.emit('newMessage', newMessage);
	});

	socket.on('disconnect', (socket) => {
		console.log('User was disconnected');
	});
});


server.listen(PORT, () => {
	console.log('Server up on port', PORT);
});