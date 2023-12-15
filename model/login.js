const mongoose = require('mongoose');
const taxiSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    broj_telefona: {
        Type: String,
        required: true,
        unique: true
    },
    taksi_dozvola: {
        Type: String,
        required: true,
        unique: true
    },
    ime: {
        Type: String,
        required: true
    },
    prezime: {
        Type: String,
        required: true
    },
    datum_rodjenja: {
        Type: String,
        required: true,
    }
}, {collection: "korisnici"});

const taxiModel = mongoose.model('Taxi', taxiSchema);
module.exports.model = taxiModel;

