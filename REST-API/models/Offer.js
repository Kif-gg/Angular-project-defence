const { Schema, model, Types: { ObjectId } } = require('mongoose');

const offerSchema = new Schema({
    vehicleBrand: { type: String, required: [true, 'Please choose the brand of your vehicle!'] },
    vehicleModel: { type: String, required: [true, 'Please choose the model of your vehicle!'] },
    price: { type: Number, required: true, min: [0, 'Price cannot be negative!'] },
    year: {
        type: Number, required: true, validate: {
            validator: value => value >= 1970 && value <= 2025,
            message: 'Year must be between 1970 and 2025!'
        }
    },
    description: {
        type: String, required: true,
        minLength: [50, 'Description must be minimum 50 characters!'],
        maxLength: [255, 'Description cannot be longer than 255 characters!']
    },
    imageUrl: { type: String, default: '', maxLength: [150, 'Image URL cannot be longer than 150 symbols!'] },
    phoneNumber: { type: String, required: [true, 'Phone number is required!'] },
    _ownerId: { type: ObjectId, ref: 'User', required: true }

});


const Offer = model('Offer', offerSchema);

module.exports = Offer;