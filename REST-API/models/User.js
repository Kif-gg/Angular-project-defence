const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String, required: true, unique: true,
        minLength: [3, 'Username should be at least 3 characters!'],
        maxLength: [12, 'Username cannot be longer than 12 characters!']
    },
    email: { type: String, required: true, unique: true },
    hashedPassword: {
        type: String, required: true,
        minLength: [5, 'Password must be minimum 5 characters!'],
        maxLength: [30, 'Password cannot be longer than 30 characters!']
    },
    blocked: { type: Boolean, required: true, default: false }
});

userSchema.index({ username: 1 }, {
    collation: {
        locale: 'en',
        strength: 2
    }
});

userSchema.index({ emai: 1 }, {
    collation: {
        locale: 'en',
        strength: 2
    }
});

const User = model('User', userSchema);

module.exports = User;