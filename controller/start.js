const taxiModel = require('../model/taxi');
const fuelModel = require('../model/fuel');
const artikalModel = require('../model/artikal');

let user;

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
        if(data.dozvola!= null){

            user = await taxiModel.findTaxiDriver(data.dozvola);
        }else if(user.dozvola != null){
            user = await taxiModel.findTaxiDriver(data.dozvola);
        }
        
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
        const data = req.body;
        //console.log(data)
        if(data.indikator!= null && user.bodovi >= data.indikator){
            //console.log(data.indikator)
            await taxiModel.updatePoints(user.broj_telefona, user.taksi_dozvola, -data.indikator)
            user = await taxiModel.findTaxiDriver(data.dozvola);
        }
       
        //console.log(user);
        const artikli = await artikalModel.findArticles();
        res.render('artikli.ejs', {artikli, user});
    }catch(err){
        next(err);
    }
}
