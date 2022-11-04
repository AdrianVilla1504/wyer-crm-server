const Router = require("express");

const {
  getAllClientsHandler,
  getSingleClientHandler,
  createClientHandler,
  updateClientHandler,
  deleteClientHandler,
} = require("./clients.controller");

const router = Router();

router.get("/", getAllClientsHandler);
router.get("/:id", getSingleClientHandler);
router.post("/", createClientHandler);
router.patch("/:id", updateClientHandler);
router.delete("/:id", deleteClientHandler);

module.exports = router;
