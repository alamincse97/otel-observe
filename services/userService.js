const {log} = require("console");
const cache = require('../utills/cache');

class UserService {

    createUser(data) {
        console.log("Creating user", data);
        cache.set('users', data, 60);
    }
}

module.exports = new UserService();