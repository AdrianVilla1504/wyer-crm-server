const Client = require('./clients.model');

function getAllClients(){
  return Client.find({}).sort({name: 1});
}

function getSingleClient(id) {
  return Client.findById(id);
}

function createClient(client){
  return Client.create(client);
}

function updateClient(id, client) {
  return  Client.findByIdAndUpdate(id, client, {new: true})
}

function deleteClient(id) {
  return Client.findByIdAndRemove(id);
}

module.exports = {
  getAllClients,
  getSingleClient,
  createClient,
  updateClient,
  deleteClient
}
