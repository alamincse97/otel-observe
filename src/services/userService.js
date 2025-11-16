const {log} = require("console");
const cache = require('../utils/cache');

class UserService {

    createUser(data) {
        console.log("Creating user", data);
        cache.set('users', data, 60);
    }
}

module.exports = new UserService();