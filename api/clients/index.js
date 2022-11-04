const Router = require("express");

const {
  getAllClientsHandler,
  getSingleClientHandler,
  createClientHandler,
  updateClientHandler,
} = require("./clients.controller");

const router = Router();

router.get("/", getAllClientsHandler);
router.get("/:id", getSingleClientHandler);
router.post("/", createClientHandler);
router.patch("/:id", updateClientHandler);

module.exports = router;
