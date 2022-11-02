const Router = require('express');

const {getAllClientsHandler, createClientHandler } = require('./clients.controller');

const router = Router();

router.get('/', getAllClientsHandler);
router.post('/', createClientHandler);



module.exports = router;
