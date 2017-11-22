const http = require('http');
const config = require('config3');
const app = require('./src/app');

const server = http.createServer(app);
server.listen(config.PORT);
