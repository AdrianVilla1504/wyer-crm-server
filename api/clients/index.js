const Router = require('express');

const {getAllClientsHandler } = require('./clients.controller');

const router = Router();

router.get('/', getAllClientsHandler);



module.exports = router;
