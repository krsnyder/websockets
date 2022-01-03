const server = require('./server');

const app = server.listen(8000, () => {
  console.log("run it")
});
