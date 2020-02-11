const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

server.listen(process.env.PORT || 5000, () => console.log(`Listening...`))