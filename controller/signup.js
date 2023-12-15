
module.exports.signup = function(req, res, next){
    try{
        res.render('signup.ejs');
    }catch(err){
        next(err);
    }
}
