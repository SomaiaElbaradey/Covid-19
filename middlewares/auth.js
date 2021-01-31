const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = (req, res, next) => {
    const token = req.header('x-login-token');
    if (!token) return res.status(401).send('Access Denied. no token provided.');
    try {
        req.user = jwt.verify(token, config.get('jwtKey'))
    }
    catch (error) {
        console.error(err);
        res.status(400);
        res.json({ success: false, message: "Invalid token." });
    }
    next();
}