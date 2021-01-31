
module.exports = function (req, res, next) {
    console.log('the request url:', req.url);
    console.log('the request method:', req.method);
    console.log('the current time:', new Date());
    next();
}