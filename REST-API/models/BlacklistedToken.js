const { Schema, model } = require('mongoose');

const blacklistedTokenSchema = new Schema({
    token: { type: String },
}, { timestamps: { createdAt: 'createdAt' } });

const BlacklistedToken = model('BlacklistedToken', blacklistedTokenSchema);

module.exports = BlacklistedToken;