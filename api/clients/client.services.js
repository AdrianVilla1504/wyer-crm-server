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

module.exports = {
  getAllClients,
  getSingleClient,
  createClient,

}
