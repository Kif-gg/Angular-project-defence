const Admin = require('../models/Admin');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const { secret } = require('../services/userService');


let timesUntilBlock = 6;

async function adminLogin(email, password, pin) {
    const admin = await Admin.findOne({ email }).collation({ locale: 'en', strength: 2 });

    if (timesUntilBlock <= 0) {
        admin.blocked = true;
        admin.save();
        timesUntilBlock = 6;
    }

    if (!admin) {
        throw new Error('Incorrect email, password or PIN!');
    } else if (admin.blocked == true) {
        throw new Error('Account blocked for too many wrong attempts! Contact us via email for more details.')
    }

    const matchPass = await bcrypt.compare(password, admin.hashedPassword);
    const matchPin = pin === admin.pin;

    if (!matchPass) {
        timesUntilBlock--;
        throw new Error('Incorrect email, password or PIN!')
    } else if (!matchPin) {
        timesUntilBlock--;
        throw new Error('Incorrect email, password or PIN!')
    } else if (admin.blocked == true) {
        throw new Error('Account blocked for too many wrong attempts! Contact us via email for more details.')
    }

    timesUntilBlock = 6;
    return adminCreateToken(admin);

};


function adminCreateToken(admin) {
    const payload = {
        _id: admin._id,
        email: admin.email,
    }
    const token = jwt.sign(payload, secret, { expiresIn: '2h' });
    return {
        _id: admin._id,
        email: admin.email,
        accessToken: token
    };
};



async function getAllUsers() {
    return User.find({});
};

async function getUsersByUsername(username) {
    return User.find({ username: username });
};

async function getBlockedUsers() {
    return User.find({ blocked: true });
};

async function update(id, user) {
    const existingUser = User.findById(id);

    existingUser.email = user.email;
    existingUser.username = user.username;
    existingUser.blocked = user.blocked;

    return existingUser.save();
};

async function deleteById(id) {
    return User.findByIdAndDelete(id);
};

module.exports = {
    adminLogin,
    getAllUsers,
    getUsersByUsername,
    getBlockedUsers,
    update,
    deleteById,
};