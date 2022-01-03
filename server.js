const server = require("express")();

server.use("*", (req, res) => {
  console.log("Catching all requests")
});

module.exports = server;
