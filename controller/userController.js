const userService = require('../services/userService');
const logger = require('../logger');

class UseerController {
    createUser(req, res, next){
        logger.info("Creating user");
        userService.createUser();
        res.status(201).json({
            message: "User created successfully"
        })
    }
}

module.exports = new UseerController();