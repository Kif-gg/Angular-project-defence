const { Schema, model } = require('mongoose');

const adminSchema = new Schema({
    email: { type: String, required: true, unique: true },
    hashedPassword: {
        type: String, required: true,
    },
    pin: {
        type: String, required: true,
        minLength: [8, 'Pin cannot be less than 8 characters!'],
        maxLength: [8, 'Pin cannot be more than 8 characters!']
    },
    blocked: { type: Boolean, required: true, default: false }
});


adminSchema.index({ emai: 1 }, {
    collation: {
        locale: 'en',
        strength: 2
    }
});

const Admin = model('Admin', adminSchema);

module.exports = Admin;