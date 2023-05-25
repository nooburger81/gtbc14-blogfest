const path = require('path');
require('dotenv').config();
const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./controllers/');
const exphbs = require('express-handlebars')
const helpers = require('./utils/helpers');
const session = require('express-session')
const SequelizeStore = require('connect-session-sequelize')(session.Store);


const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

const sess = {
  secret: "Super secret secret",
  cookie: { maxAge: 7200000 },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize.sync({ force: false }).then(() => {
    app.listen(process.env.PORT ||3001, () => console.log('Now listening'));
  });