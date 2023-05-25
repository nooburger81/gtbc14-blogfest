const path = require('path');
require('dotenv').config();
const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./controllers/');
const exphbs = require('express-handlebars')


const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize.sync({ force: false }).then(() => {
    app.listen(process.env.PORT ||3001, () => console.log('Now listening'));
  });