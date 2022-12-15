const { parseToken } = require("../services/userService");

module.exports = () => async (req, res, next) => {
    const token = req.cookies['Authorization'];

    if (token) {
        try {
            const payload = await parseToken(token);
            req.user = payload;
            req.token = token;
        } catch (error) {
            res.cookie('Authorization', 'alabala', {maxAge: 0});
            return res.status(401).json({message: 'Invalid authorization token!'});
        }
    }

    next();
};