const {countries} = require('../models/country')

module.exports.getCountries = async function (req, res) {
    const allCountries = await countries.find({}) 
    res.send(allCountries)
}