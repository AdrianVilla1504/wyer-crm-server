const router = require('./api/healthcheck/index');
const contact = require('./api/contacts/index');

function routes(app) {
  app.use('/api/healthcheck', router);
  app.use('/api/contacts', contact);
}

module.exports = routes;
