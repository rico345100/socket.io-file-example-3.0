const express = require('express');
const expressServer = express();
const httpServer = require('http').createServer(expressServer);
const io = require('socket.io')(httpServer);

expressServer.use(express.static(__dirname + '/dist'));
expressServer.use(express.static(__dirname + '/node_modules'));

httpServer.listen(3000, () => console.log('Server Listening on port 3000...'));

io.on('connection', (socket) => {
	console.log('Socket Connected!');
});
