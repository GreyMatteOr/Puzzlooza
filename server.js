const express = require('express');
const app = express();
const cors = require('cors');
const server = require('http').createServer(app);
let users = {};

const io = require("socket.io")(server, {
  cors: {
    origin: true,
    methods: ["GET", "POST"]
  }
});

app.use(express.json());
app.use(cors());
app.set('port', process.env.PORT || 3001);

io.on( 'connect', ( {id} ) => {
  console.log('A user has connected!');
  users[id] = {};

  socket.on( 'move', (groupID, newX, newY) => {
    socket.broadcast.emit('move', groupID, newX, newY);
  });

  socket.on('disconnect', ( {id} ) => {
    console.log('A user has disconnected!');
    delete users[id];
  });
})

server.listen(app.get('port'), () => {
  console.log(`Listening on port ${app.get('port')}.`);
});
