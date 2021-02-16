require('./db/dbConnection');
require('express-async-errors');
const config = require('config');
const express = require('express');
const app = express();

const error = require('./middlewares/error');
const logs = require('./middlewares/logs');

if (!config.get('jwtKey')) {
    console.log("FATAL ERROR: jwtKey is not defined.")
    process.exit(1);
}
//routes
const userRouter = require('./routes/user');
const countryRouter = require('./routes/country');

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/Covid19Front'));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/Covid19Front/index.html'));
});

// app.get("/*", (req, res)=>{
//     res.sendFile(process.cwd() + "/dist/Covid19Front/index.html");
// })
app.use(express.static('public'));
app.use(express.json());
app.use(logs);

app.use('/api/user', userRouter);
app.use('/api/country', countryRouter)

app.use(error);

app.listen(process.env.PORT || 2939, () => {
    console.info(`server listening on port 2939`);
});