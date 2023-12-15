
module.exports.login = function(req, res, next){
    try{
        res.render('login.ejs');
    }catch(err){
        next(err);
    }
}
