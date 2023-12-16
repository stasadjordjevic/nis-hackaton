const taxiModel = require('../model/taxi');
const fuelModel = require('../model/fuel');
const artikalModel = require('../model/artikal');

function genQRCode(phoneNumber, taxiPermit)
{
    return "7824 7236 " + phoneNumber.substr(phoneNumber.length - 3, 3) + taxiPermit.charAt(0) + " " + taxiPermit.substr(1);
}

module.exports.start = async function(req, res, next){
    try{
        const data = req.body;
        
        if(data.ind === 'signup'){
            await taxiModel.insertTaxiDriver(data.telefon, data.dozvola, data.ime, data.prezime, data.datum_rodjenja);
        }
        let user = await taxiModel.findTaxiDriver(data.dozvola);
        let qr = genQRCode(user.broj_telefona, user.taksi_dozvola);
        res.render('start.ejs', {user, qr});
    }catch(err){
        next(err);
    }
}

module.exports.share = async function(req, res, next){
    try{
        res.render('share.ejs');
    }catch(err){
        next(err);
    }
}
module.exports.cene = async function(req, res, next){
    try{
        const fuels = await fuelModel.findFuels();
        res.render('cene.ejs', {fuels});
    }catch(err){
        next(err);
    }
}

module.exports.artikli = async function(req, res, next){
    try{
        const artikli = await artikalModel.findArticles();
        res.render('artikli.ejs', {artikli});
    }catch(err){
        next(err);
    }
}


