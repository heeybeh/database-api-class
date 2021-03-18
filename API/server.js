'use strict'

// requiring express and bodyParser
require("./config/db");
const express = require("express");
const bodyParser = require("body-parser");

// create express app
const app = express();
var routes = require('./api/routes/titanicRoutes');

// defining port to run express app
const port = process.env.PORT || 3000;

// using bodyParser middleware on express app
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//importing route
routes(app);

// Adding endpoint
app.get('/', (req, res) => {
    res.send("Hello to titanic home page");
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});