const Router = require('express');

const {getAllClientsHandler, getSingleClientHandler, createClientHandler } = require('./clients.controller');

const router = Router();

router.get('/', getAllClientsHandler);
router.get('/:id', getSingleClientHandler)
router.post('/', createClientHandler);



module.exports = router;
