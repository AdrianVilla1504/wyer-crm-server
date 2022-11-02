const { getAllClients } = require("./client.services");

async function getAllClientsHandler(req, res) {
  try {
    const client = await getAllClients();
    return res.status(200).json(client);
  } catch (error) {
    return res.status(500).json({ error });
  }
}


module.exports = { getAllClientsHandler };
