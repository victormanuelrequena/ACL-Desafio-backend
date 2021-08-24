const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const routesPuestos = require('./src/routes/puestos.routes.js');

const app = express();

app.use(cors())
app.use(express.json());
app.use(morgan('dev'));

app.use('/', routesPuestos);


//Settings
app.set('port', 4000);

module.exports = app;