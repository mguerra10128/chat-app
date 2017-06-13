const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const { generateMessage, generateLocationMessage } = require('./utils/message');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('new user connected via socket');

  socket.emit('newMessage',
  generateMessage('Admin', 'Welcome to the chat app'));

  socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined'));

  socket.on('createMessage', (message, callback) => {
    console.log('message from client', message);
    let { from, text } = message;
    let createdAt = new Date().getTime();

    io.emit('newMessage', generateMessage(from, text));
    callback();
  });

  socket.on('createLocationMessage', (coords) => {
    let { latitude, longitude } = coords;
    io.emit('newLocationMessage',
      generateLocationMessage('Admin', latitude, longitude));
  });

  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });
});

server.listen(port, () => {
  console.log('Server is running on port 3000');
});
