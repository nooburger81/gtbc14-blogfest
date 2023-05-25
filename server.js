const path = require('path');
require('dotenv').config();
const express = require('express');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize.sync({ force: false }).then(() => {
    app.listen(process.env.PORT ||3001, () => console.log('Now listening'));
  });