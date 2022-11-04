const {
  getAllContacts,
  getSingleContact,
  createContact,
  updateContact,
  deleteContact,
} = require("./contacts.services");

async function getAllContactsHandler(_, res) {
  try {
    const contact = await getAllContacts();
    return res.status(200).json(contact);
  } catch (error) {
    return res.status(500).json({ error });
  }
}

async function getSingleContactHandler(req, res) {
  const { id } = req.params;
  try {
    const contact = await getSingleContact(id);

    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    return res.json(contact);
  } catch (error) {
    return res.status(500).json({ error });
  }
}

async function createContactHandler(req, res) {
  const contactData = req.body;
  try {
    const contact = await createContact(contactData);
    return res.status(201).json(contact);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
}

async function updateContactHandler(req, res) {
  const { id } = req.params;
  const contactData = req.body;

  try {
    const contact = await updateContact(id, contactData);
    return res.status(200).json(contact);
  } catch (error) {
    return res.status(500).json({ error });
  }
}

async function deleteContactHandler(req, res) {
  const { id } = req.params;
  try {
    const contact = await deleteContact(id);

    if (!contact) {
      return res.status(400).json({ nessage: "Contact not found" });
    }

    return res.json(contact);
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({ error });
  }
}

module.exports = {
  getAllContactsHandler,
  getSingleContactHandler,
  createContactHandler,
  updateContactHandler,
  deleteContactHandler,
};
