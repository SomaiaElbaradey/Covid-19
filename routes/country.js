const express = require('express');
const countryRouter = new express.Router();
const { getCountries } = require('../controllers/country');

countryRouter.get('/countries', getCountries);

module.exports = countryRouter;