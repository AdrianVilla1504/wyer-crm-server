const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  birthDate: {
    type: Date,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  contactType: {
    type: String,
    default: "Cliente",
    required: true,
  },
  departament: {
    type: String,
    default: "Bolivar",
    required: true,
  },
  city: {
    type: String,
    default: "Cartagena de Indias",
    required: true,
  },
  sex: {
    type: String,
    default: "No especificado",
    required: true,
  }
}, { timestamps: true });

const Contact = mongoose.model('Client', contactSchema);

module.exports = Contact;
