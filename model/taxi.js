const mongoose = require('mongoose');

const taxiSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    broj_telefona: {
        type: String,
        required: true,
        unique: true
    },
    taksi_dozvola: {
        type: String,
        required: true,
        unique: true
    },
    ime: {
        type: String,
        required: true
    },
    prezime: {
        type: String,
        required: true
    },
    datum_rodjenja: {
        type: Date,
        required: true
    }
}, {collection: "korisnici"});

const taxiModel = mongoose.model('Taxi', taxiSchema);
module.exports.model = taxiModel;


async function findTaxiDriver(taxiPermit) {
    const users = await taxiModel.find({taksi_dozvola: taxiPermit});
    if(users.length > 0) {
        return users[0];
    } else {
        return null;
    }
}

async function insertTaxiDriver(phoneNumber, taxiPermit, name, surname, dob) {
    const newUser = new taxiModel();
    newUser._id = new mongoose.Types.ObjectId();
    newUser.broj_telefona = phoneNumber;
    newUser.taksi_dozvola = taxiPermit;
    newUser.ime = name;
    newUser.prezime = surname;
    newUser.datum_rodjenja = dob;
    const n = await newUser.save();
    console.log('Ubaceno: ', n);
}

 module.exports = {findTaxiDriver, insertTaxiDriver};
