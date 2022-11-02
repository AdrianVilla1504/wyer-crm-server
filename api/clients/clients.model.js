const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  lastName: {
    type: String,
    required: true,
    unique: true,
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
    enum: ["CLIENT", "PARTNER"],
    default: "CLIENT",
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
}, { timestamps: true });

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;
