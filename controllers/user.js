const bcrypt = require('bcryptjs');
const { users, validateUser, validateUserLogin } = require('../models/user');

module.exports.logIn = async function (req, res) {

    //Checkin if the username exists
    const user = await users.findOne({ username: req.body.username });
    if (!user) return res.status(400).send('Invalid username or password');

    //Checkin if Password is correct
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send("Invalid mail or password.");

    //Validate the data of user
    const { error } = validateUserLogin(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const webToken = user.generateToken("96h");
    res.send(webToken);
}

module.exports.registration = async function (req, res) {

    //Validate the data of user
    const { error } = validateUser(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    //Checkin if the username exists
    let user = await users.findOne({ username: req.body.username });
    if (user) return res.status(409).send("username already exists.");

    //save the user in Database
    let new_user = new users({
        username: req.body.username,
        password: req.body.password
    });
    //add salt before the hashed password, then hash it.
    const salt = await bcrypt.genSalt(10);
    new_user.password = await bcrypt.hash(new_user.password, salt);
    await new_user.save();

    const token = new_user.generateToken("96h");
    res.header("x-login-token", token).send(token);
}
