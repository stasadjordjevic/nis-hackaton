const taxiModel = require('../model/taxi');

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
        console.log(qr);
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
        res.render('cene.ejs');
    }catch(err){
        next(err);
    }
}

module.exports.settings = async function(req, res, next){
    try{
        res.render('settings.ejs');
    }catch(err){
        next(err);
    }
}


