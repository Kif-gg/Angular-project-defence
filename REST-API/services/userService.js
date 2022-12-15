const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const BlacklistedToken = require('../models/BlacklistedToken');
const { parseError } = require('../util/parser');


const secret = 'xldfhg783o4riomnjhdgf';
let timesUntilBlock = 10;

async function register(username, email, password, repass) {
    const existingEmail = await User.findOne({ email }).collation({ locale: 'en', strength: 2 });
    const existingUsername = await User.findOne({ username }).collation({ locale: 'en', strength: 2 });
    if (existingEmail) {
        throw new Error('This email is already registered!');
    } else if (existingUsername) {
        throw new Error('This username is already taken, try another one!')
    }
    const user = await User.create({
        username,
        email,
        hashedPassword: await bcrypt.hash(password, 10),
        blocked: false
    });

    return createToken(user);
};

async function login(username, password) {
    const user = await User.findOne({ username }).collation({ locale: 'en', strength: 2 });

    if (timesUntilBlock <= 0) {
        user.blocked = true;
        user.save();
        timesUntilBlock = 10;
    }

    if (!user) {
        throw new Error('Incorrect username or password!');
    } else if (user.blocked == true) {
        throw new Error('Account blocked! Contact us via email for more details.')
    }

    const match = await bcrypt.compare(password, user.hashedPassword);

    if (!match) {
        timesUntilBlock--;
        throw new Error('Incorrect username or password!')
    } else if (user.blocked == true) {
        throw new Error('Account blocked! Contact us via email for more details.')
    }

    timesUntilBlock = 10;
    return createToken(user);

};

async function logout(token) {
    await BlacklistedToken.create({ token });
};

async function update(id, user) {
    const existingUser = await User.findById(id);

    existingUser.username = user.username;
    existingUser.email = user.email;
    // TODO add password change if timeleft is enough
    // existingUser.hashedPassword = await bcrypt.hash(user.password, 10);

    return existingUser.save();
}

async function deleteUserById(id) {
    return User.findByIdAndDelete(id);
}


function createToken(user) {
    const payload = {
        _id: user._id,
        username: user.username,
        email: user.email,
    }
    const token = jwt.sign(payload, secret, { expiresIn: '1d' });
    return {
        _id: user._id,
        username: user.username,
        email: user.email,
        accessToken: token
    };
};

async function parseToken(token) {
    try {
        const match = await BlacklistedToken.find({ token: token });

        if (match.length > 0) {
            throw new Error('Token is in blacklist!');
        }
        return jwt.verify(token, secret);
    } catch (error) {
        const parsed = parseError(error);
        throw new Error(parsed);
    }
};



module.exports = {
    register,
    login,
    logout,
    parseToken,
    update,
    deleteUserById,
    secret
}