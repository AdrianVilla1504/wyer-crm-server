const router = require('./api/healthcheck/index');
const client = require('./api/clients/index');

function routes(app) {
  app.use('/api/healthcheck', router);
  app.use('/api/clients', client);
}

module.exports = routes;
