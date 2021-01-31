const mongoose = require('mongoose');
const Joi = require('joi');
const config = require('config');

Joi.objectId = require('joi-objectid')(Joi);
const jwt = require('jsonwebtoken');

const schema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        minlengt: 7,
        maxlength: 63,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 96,
    },
    favoriteCountries: {
        type: [mongoose.ObjectId],
        ref: "countries",
        trim: true
    }
})
// Generate token method
schema.methods.generateToken = function (expire) {
    return jwt.sign({
        _id: this._id
    }, config.get('jwtKey'), { expiresIn: expire }
    );
};
module.exports.users = mongoose.model('User', schema)

//validation 
module.exports.validateUser = function validateUser(user) {
    const schema = Joi.object({
        username: Joi.string().required().trim().min(7).max(63).lowercase(),
        password: Joi.string().required().min(7)
            .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z]).{8,}$'))
            .messages({
                "string.pattern.base": "your password must have at least 1 upper case letter, 1 special character, 1 small case letter"
              }),
        favoriteCountries: Joi.array()
    })
    return schema.validate(user);
};

// Set Login Schema // Login Validation
module.exports.validateUserLogin = function (userRequest) {
    const loginSchema = Joi.object().keys({
        username: Joi.string().required().trim().lowercase().min(7).max(63),
        password: Joi.string().required().min(8).max(96),
    });
    return loginSchema.validate(userRequest);
};