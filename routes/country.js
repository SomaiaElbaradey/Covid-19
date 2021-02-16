const express = require('express');
const countryRouter = new express.Router();
const { getCountries, getFavCountries, addFavCountry, deleteFavCountry } = require('../controllers/country');
const auth = require('../middlewares/auth');

countryRouter.get('/countries', getCountries);
countryRouter.get('/getFav', auth, getFavCountries);
countryRouter.delete('/:id', auth, deleteFavCountry);
countryRouter.patch('/:id', auth, addFavCountry);

module.exports = countryRouter;