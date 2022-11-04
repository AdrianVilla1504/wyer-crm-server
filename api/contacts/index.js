const Router = require("express");

const {
  getAllContactsHandler,
  getSingleContactHandler,
  createContactHandler,
  updateContactHandler,
  deleteContactHandler,
} = require("./contacts.controller");

const router = Router();

router.get("/", getAllContactsHandler);
router.get("/:id", getSingleContactHandler);
router.post("/", createContactHandler);
router.patch("/:id", updateContactHandler);
router.delete("/:id", deleteContactHandler);

module.exports = router;
