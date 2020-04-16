const UserService = require('../services/UserService');
class AuthController {
    authenticate(req, res) {
        let user = UserService.getUserById();

        res.json({
            user: user
        })
    }
}

module.exports = AuthController;