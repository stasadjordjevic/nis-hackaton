const taxiModel = require('../model/taxi');

module.exports.start = async function(req, res, next){
    try{
        const data = req.body;
        
        if(data.ind === 'signup'){
            console.log('pozdrav')
            await taxiModel.insertTaxiDriver(data.telefon, data.dozvola, data.ime, data.prezime, data.datum_rodjenja);
        }
        let user = await taxiModel.findTaxiDriver(data.dozvola);
        console.log('dohvatio sam ', user);
        res.render('start.ejs', user);
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


