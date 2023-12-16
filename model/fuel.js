const mongoose = require('mongoose');

const fuelSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    naziv: {
        type: String,
        required: true,
    },
    cena: {
        type: Number,
        required: true
    },
    opis: {
        type: String,
        required: true
    },
    putanja_slika: {
        type: String,
        required: true
    }
}, {collection: "fuels"});

const fuelModel = mongoose.model('Fuel', fuelSchema);
module.exports.model = fuelModel;


async function findFuels() {
    const users = await fuelModel.find({});
    if(users.length > 0) {
        return users;
    } else {
        return null;
    }
}

 module.exports = {findFuels};
