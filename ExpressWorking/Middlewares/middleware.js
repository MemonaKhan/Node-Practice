module.exports = function(req,res,next){
    console.log('Current URL is ',req.originalUrl);
    next();
}