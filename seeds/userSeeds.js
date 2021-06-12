const { User } = require('../models');

const userData = [
  {
    username: 'Ken Jennings',
    password: 'password1',
  },
  {
    username: 'Alex Trebek',
    password: 'password2',
  },
  {
    username: 'Vana White',
    password: 'password3',
  },
];

const seedUsers = () =>
  User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedUsers;
