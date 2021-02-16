const { connection } = require('mongoose')
const { countries } = require('../models/country')
const { users } = require('../models/user')

module.exports.getCountries = async function (req, res) {
    const allCountries = await countries.find({}, {
        _id: 1, country: 1, population: 1, country_iso2: 1, deaths: 1,
        recovered: 1, confirmed: 1
    })
    res.send(allCountries)
}

module.exports.getFavCountries = async function (req, res) {

    const user = await users.findOne({ _id: req.user._id });
    if (!user) return res.status(404).send('the user with given id not existed.');
    const favCountries = user.favoriteCountries;
    if (!favCountries.length) return res.status(204).send('no content.');

    let showFav = new Array;
    for (let i = 0; i < favCountries.length; i++) {
        showFav[i] = await countries.findOne({ _id: favCountries[i] }, {
            _id: 1, country: 1, population: 1, country_iso2: 1, deaths: 1,
            recovered: 1, confirmed: 1
        })
    }
    res.send(showFav);
}

module.exports.addFavCountry = async function (req, res) {
    let CountryID = req.params.id;
    const { _id } = req.user;
    const user = await users.findOne({ _id });
    if (!user) return res.status(404).send('the user with given id not existed.');
    let favoriteCountries = await users.findOneAndUpdate({ _id }, { $addToSet: { favoriteCountries: [CountryID] } }, {
        new: true
    });
    if (!favoriteCountries) throw new Error('unable to add the country');
    res.status(200).send('the country is added.');
}

module.exports.deleteFavCountry = async function (req, res) {
    let CountryID = req.params.id;
    const { _id } = req.user;
    const user = await users.findOne({ _id });
    if (!user) return res.status(404).send('the user with given id not existed.');
    let favoriteCountries = await users.findOneAndUpdate({ _id }, { $pull: { favoriteCountries: CountryID } });

    if (!favoriteCountries) throw new Error('unable to remove the country');
    res.status(200).send('the country is removed.');
}