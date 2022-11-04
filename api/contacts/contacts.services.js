const Contact = require('./contacts.model');

function getAllContacts(){
  return Contact.find({}).sort({name: 1});
}

function getSingleContact(id) {
  return Contact.findById(id);
}

function createContact(contact){
  return Contact.create(contact);
}

function updateContact(id, contact) {
  return Contact.findByIdAndUpdate(id, contact, {new: true})
}

function deleteContact(id) {
  return Contact.findByIdAndRemove(id);
}

module.exports = {
  getAllContacts,
  getSingleContact,
  createContact,
  updateContact,
  deleteContact,
}
