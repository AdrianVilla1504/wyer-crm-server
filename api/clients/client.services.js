const Client = require('./clients.model');

function getAllClients(){
  return Client.find({}).sort({name: -1});
}


module.exports = {
  getAllClients,
}
