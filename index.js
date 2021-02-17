require('./db/dbConnection');
require('express-async-errors');
const config = require('config');
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors')

const error = require('./middlewares/error');
const logs = require('./middlewares/logs');

if (!config.get('jwtKey')) {
    console.log("FATAL ERROR: jwtKey is not defined.")
    process.exit(1);
}
app.use(express.json());
app.use(express.json({ limit: "50mb" }));
app.use(cors())

//routes
const userRouter = require('./routes/user');
const countryRouter = require('./routes/country');

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "*");
    next();
});

app.use(express.static(__dirname + '/dist/Covid19Front/browser'));

app.use(express.static('public'));
app.use(logs);

app.use('/api/user', userRouter);
app.use('/api/country', countryRouter)
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/Covid19Front/browser/index.html'));
});

app.use(error);

app.listen(process.env.PORT || 2939, () => {
    console.info(`server listening on port 2939`);
});
