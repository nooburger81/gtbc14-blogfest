const { User } = require('../models');

const userData = [
  {
    username: "riteAid_pro23",
    email: "tinyD@gmail.com",
    password: "password1234"
  },
  {
    username: "j-boystick101",
    email: "pleaseleavemealone@gmail.com",
    password: "password1234"
  },
  {
    username: "given_permission45",
    email: "itsstephen@gmail.com",
    password: "password1234"
  },
  {
    username: "karen-O",
    email: "yyy@gmail.com",
    password: "password1234"
  },
  {
    username: "the_legend23",
    email: "johnlegend@gmail.com",
    password: "password1234"
  }
];

const seedUsers = () => User.bulkCreate(userData);


module.exports = seedUsers;