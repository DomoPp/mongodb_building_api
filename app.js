const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const helmet = require('helmet');
const errorHandler = require('./middleware/errorHandler');
const cors = require('cors');
const passport = require('passport');
const {routeV1} = require("./router");

const app = express();
app.use(cors());
app.use(helmet());

app.use(logger('combined'));
app.use(passport.initialize());

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use('/api/v1', routeV1);
app.use(errorHandler);


module.exports = app;
