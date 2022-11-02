const { getAllClients, createClient } = require("./client.services");

async function getAllClientsHandler(req, res) {
  try {
    const client = await getAllClients();
    return res.status(200).json(client);
  } catch (error) {
    return res.status(500).json({ error });
  }
}

async function createClientHandler(req, res) {
  const clientData = req.body;
  try {
    const client = await createClient(clientData);
    return res.status(201).json(client);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
}


module.exports = { getAllClientsHandler, createClientHandler };
