const http = require('http');
const config = require('config3');
const app = require('./src/app');

/*
 * Entrypoint
*/

const server = http.createServer(app);
server.listen(config.PORT, () => {
  console.log(`Server is listening on ${config.PORT}`);
});
