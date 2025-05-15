require("dotenv").config();
const { PORT } = process.env;
const express = require("express");
const app = require('./src/app.js');
const conectionBD = require('./src/bd.js');


conectionBD();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);

})