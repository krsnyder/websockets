const express = require("express");
const server = express();

server.use(express.static('public'));

// server.use("*", (req, res) => {
//   console.log("Catching all requests")
// });

module.exports = server;
