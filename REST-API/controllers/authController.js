const { register, login, logout, deleteUserById, update } = require('../services/userService');
const { body, validationResult } = require('express-validator');
const { parseError } = require('../util/parser');
const { hasUser, isGuest } = require('../middlewares/guards');
const bcrypt = require('bcrypt');
const User = require('../models/User');

const authController = require('express').Router();

authController.post('/register',
    body('username').isLength({ min: 3 }).withMessage('Username must be at least 3 characters!'),
    body('username').isLength({ max: 12 }).withMessage('Username cannot be more than 12 characters!'),
    body('email').isEmail().withMessage('Invalid email!'),
    async (req, res) => {
        try {
            const { errors } = validationResult(req);
            if (errors.length > 0) {
                throw errors;
            }


            if (req.body.password !== req.body.repass) {
                throw new Error('Passwords don\'t match!');
            }
            const token = await register(req.body.username, req.body.email, req.body.password, req.body.repass);
            res.json(token);
        } catch (error) {
            const message = parseError(error);
            res.status(400).json({ message })
        }
    });

authController.post('/login', isGuest(), async (req, res) => {
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


authController.delete('/profile', hasUser(), async (req, res, next) => {
    try {
        const user = await User.findById(req.user._id);
        if (!user) {
            throw new Error(`User with id ${req.user._id} does not exist!`);
        }
        await deleteUserById(req.user._id);
        res.status(204).end();
    } catch (error) {
        const message = parseError(error);
        res.status(400).json({ message });
    }
});

authController.get('/profile', hasUser(), async (req, res, next) => {
    try {
        const user = await User.findById(req.user._id);
        if (!user) {
            throw new Error(`User with id ${req.user._id} does not exist!`);
        }
        res.status(204).json(user);
    } catch (error) {
        const message = parseError(error);
        res.status(400).json({ message });
    }
});

authController.put('/profile', hasUser(), async (req, res, next) => {
    try {
        const user = await User.findById(req.user._id);
        if (!user) {
            throw new Error(`User with id ${req.user._id} does not exist!`);
        }
        const result = await update(req.user._id, req.body);
        res.json(result);
    } catch (error) {
        const message = parseError(error);
        res.status(400).json({ message });
    }
});

module.exports = authController;