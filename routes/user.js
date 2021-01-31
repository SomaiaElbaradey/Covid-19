const express = require('express');
const userRouter = new express.Router();
const auth = require('../middlewares/auth');
const { logIn, registration } = require('../controllers/user');

// userRouter.post('/register', register)
userRouter.post('/login', logIn)
userRouter.post('/register', registration)

module.exports = userRouter;