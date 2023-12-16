const mongoose = require('mongoose');

const artikalSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    naziv: {
        type: String,
        required: true,
    },
    putanja_slika: {
        type: String,
        required: true
    },
    originalna_cena: {
        type: Number,
        required: true
    },
    niza_cena: {
        type: Number,
        required: true
    },
    manje_bodova: {
        type: Number,
        required: true
    }
}, {collection: "artikli"});

const artikalModel = mongoose.model('Artikal', artikalSchema);
module.exports.model = artikalModel;


async function findArticles() {
    const articles = await artikalModel.find({});
    if(articles.length > 0) {
        return articles;
    } else {
        return null;
    }
}

 module.exports = {findArticles};
