const { adminLogin, getAllUsers, getUsersByUsername, getBlockedUsers, update, deleteById } = require('../services/adminService');
const { logout } = require('../services/userService');
const { hasUser } = require('../middlewares/guards');
const User = require('../models/User');

const adminController = require('express').Router();


adminController.post('/h1dd3n4ddr35s/570p/l091n', async (req, res) => {
    try {
        const token = await adminLogin(req.body.email, req.body.password, req.body.pin);
        res.json(token);
    } catch (error) {
        const message = parseError(error);
        res.status(400).json({ message })
    }
});

adminController.get('/h1dd3n4ddr35s/570p/logout', async (req, res) => {
    const token = req.token;
    await logout(token);
    res.status(204).end();
});

adminController.get('/h1dd3n4ddr35s/570p/users', hasUser(), async (req, res) => {
    try {
        let users = [];
        if (req.query.where) {
            const username = JSON.parse(req.query.where.split('=')[1]);
            users = await getUsersByUsername(username);
        } else {
            users = await getAllUsers();
        }
        res.json(users);
    } catch (error) {
        const message = parseError(error);
        res.status(400).json({ message });
    }
});

adminController.get('/h1dd3n4ddr35s/570p/users/blocked', hasUser(), async (req, res) => {
    try {
        const blocked = await getBlockedUsers();
        res.json(blocked);
    } catch (error) {
        const message = parseError(error);
        res.status(400).json({ message });
    }
});

adminController.put('/h1dd3n4ddr35s/570p/users/:userId', hasUser(), async (req, res) => {
    try {
        const user = User.findById(req.params.userId);
        if (!user) {
            throw new Error(`User with id ${req.params.id} does not exist!`)
        }
        const result = await update(req.params.userId, req.body)
        res.json(result);
    } catch (error) {
        const message = parseError(error);
        res.status(400).json({ message });
    }
});

adminController.put('/h1dd3n4ddr35s/570p/users/blocked/:userId', hasUser(), async (req, res) => {
    try {
        const result = await update(req.params.userId, req.body)
        res.json(result);
    } catch (error) {
        const message = parseError(error);
        res.status(400).json({ message });
    }
});

adminController.delete('/h1dd3n4ddr35s/570p/users/blocked/:userId', hasUser(), async (req, res) => {
    try {
        await deleteById(req.params.userId)
        res.status(204).end();
    } catch (error) {
        const message = parseError(error);
        res.status(400).json({ message });
    }
});

adminController.delete('/h1dd3n4ddr35s/570p/users/:userId', hasUser(), async (req, res) => {
    try {
        await deleteById(req.params.userId)
        res.status(204).end();
    } catch (error) {
        const message = parseError(error);
        res.status(400).json({ message });
    }
});



module.exports = adminController;