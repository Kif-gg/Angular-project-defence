const { parseToken } = require("../services/userService");

module.exports = () => (req, res, next) => {
    const token = req.headers['authorization'];
    // console.log(token, 'logged from session');

    if (token) {
        try {
            const payload = parseToken(token);
            req.user = payload;
            console.log(req.user, 'logged from session');
            req.token = token;
        } catch (error) {
            return res.status(401).json({message: 'Invalid authorization token!'});
        }
    }

    next();
};