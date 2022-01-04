const server = require('./server');
const socket = require('socket.io');

const app = server.listen(8000, () => {
  console.log("run it")
});

const io = socket(app);

io.on('connection', socket => {
  console.log('Made connection: ' + socket)
});
