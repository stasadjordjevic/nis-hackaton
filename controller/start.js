module.exports.start = function(req, res, next){
    try{
        res.render('start.ejs');
    }catch(err){
        next(err);
    }
}
