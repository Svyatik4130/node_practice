const { find } = require('lodash');
const { users } = require('./users-mock');

const findById = id => find(users, user => user.id == id);

module.exports = {
    findById,
};
