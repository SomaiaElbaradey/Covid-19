const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    country: {
        type: String,
        required: true,
        trim: true,
        minlengt: 2,
        maxlength: 63,
    },
    country_iso2: {
        type: String,
        required: true,
    },
    population: {
        type: Number,
    },
    deaths: {
        type: Number,
    },
    recovered: {
        type: Number,
    },
    confirmed: {
        type: Number,
    },
    confirmed_daily: {
        type: Number,
    }
})
schema.path('country_iso2').validate(function (country_iso2) {
    return country_iso2 && country_iso2.length === 2;
}, 'Location code must be 2 characters');

module.exports.countries = mongoose.model('Country', schema)