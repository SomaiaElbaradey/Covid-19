const express = require('express');
const countryRouter = new express.Router();
const { getCountries, getFavCountries, addFavCountry } = require('../controllers/country');
const auth = require('../middlewares/auth');

countryRouter.get('/countries', getCountries);
countryRouter.get('/getFav', auth, getFavCountries);
countryRouter.patch('/:id', auth, addFavCountry);

module.exports = countryRouter;