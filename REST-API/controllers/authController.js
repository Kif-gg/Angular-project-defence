const { register, login, logout, deleteUserById, update } = require('../services/userService');
const { body, validationResult } = require('express-validator');
const { parseError } = require('../util/parser');
const { hasUser } = require('../middlewares/guards');
const bcrypt = require('bcrypt');
const User = require('../models/User');

const authController = require('express').Router();

authController.post('/register',
    body('username').isLength({ min: 3 }).withMessage('Username must be at least 3 characters!'),
    body('username').isLength({ max: 12 }).withMessage('Username cannot be more than 12 characters!'),
    body('email').isEmail().withMessage('Invalid email'),
    async (req, res) => {
        try {
            const { errors } = validationResult(req);
            if (errors.length > 0) {
                throw errors;
            }

            const token = await register(req.body.username, req.body.email, req.body.password);
            res.json(token);
        } catch (error) {
            const message = parseError(error);
            res.status(400).json({ message })
        }
    });

authController.post('/login', async (req, res) => {
    try {
        const token = await login(req.body.username, req.body.password);
        res.json(token);
    } catch (error) {
        const message = parseError(error);
        res.status(400).json({ message })
    }
});


authController.get('/logout', async (req, res) => {
    const token = req.token;
    await logout(token);
    res.status(204).end();
});


authController.delete('/:userId/profile', hasUser(), async (req, res, next) => {
    try {
        const user = await User.findById(req.params.userId);
        if (!user) {
            throw new Error(`User with id ${req.params.userId} does not exist!`);
        }
        const match = await bcrypt.compare(req.body.password, user.hashedPassword);
        if (!match) {
            throw new Error('Password is incorrect!');
        }
        await deleteUserById(req.user._id);
        res.status(204).end();
    } catch (error) {
        const message = parseError(error);
        res.status(400).json({ message });
    }
});

authController.put('/:userId/profile', hasUser(), async (req, res, next) => {
    try {
        const user = await User.findById(req.params.userId);
        if (!user) {
            throw new Error(`User with id ${req.params.userId} does not exist!`);
        }
        const result = await update(req.params.userId, req.body);
        res.json(result);
    } catch (error) {
        const message = parseError(error);
        res.status(400).json({ message });
    }
});

module.exports = authController;