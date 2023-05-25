const path = require('path');
require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

sequelize.sync({ force: false }).then(() => {
    app.listen(process.env.PORT ||3001, () => console.log('Now listening'));
  });