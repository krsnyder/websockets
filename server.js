const express = require("express");
const server = express();

// server.use("*", (req, res) => {
//   console.log("Catching all requests")
// });

server.use(express.static('public'));

module.exports = server;
