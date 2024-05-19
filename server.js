const express = require('express');
const server = express();

server.all('/', (req, res) => {
  res.send(`ok`)
})

function keepAlive(){
  server.listen(300, () => { "Server is ready!!" + Date.now() });
}

module.exports = keepAlive;