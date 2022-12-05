const { Schema, model, Types: { ObjectId } } = require('mongoose');

const offerSchema = new Schema({
    vehicleBrand: { type: String, required: [true, 'Please chose the brand of your vehicle!'] },
    vehicleModel: { type: String, required: [true, 'Please chose the model of your vehicle!'] },
    price: { type: Number, required: true, min: [0, 'Price cannot be negative!'] },
    year: {
        type: Number, required: true, validate: {
            validator: value => value >= 1970 && value <= 2025,
            message: 'Year must be between 1970 and 2025!'
        }
    },
    description: {
        type: String, required: true,
        minLength: [10, 'Description must be minimum 10 characters!'],
        maxLength: [255, 'Description cannot be longer than 255 characters!']
    },
    imageUrl: { type: String, default: '' },
    phoneNumber: { type: String, required: [true, 'Phone number is required!'] },
    _ownerId: { type: ObjectId, ref: 'User', required: true }

});


const Offer = model('Offer', offerSchema);

module.exports = Offer;