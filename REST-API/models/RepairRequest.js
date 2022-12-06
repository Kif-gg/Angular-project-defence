const { Schema, model, Types: { ObjectId } } = require('mongoose');

const repairRequestSchema = new Schema({
    imageUrl: { type: String, default: '' },
    problem: {
        type: String, required: true,
        minLength: [10, 'Description must be minimum 10 characters!'],
        maxLength: [255, 'Description cannot be longer than 255 characters!']
    },
    brandModelVehicle: {
        type: String, required: true,
        minLength: [5, 'Details of vehicle model and brand must be minimum 5 characters!'],
        maxLength: [50, 'Details of vehicle model and brand cannot be longer than 50 characters!']
    },
    phoneNumber: { type: String, required: [true, 'Please enter phone number for us to be able to contact you!'] },
    _ownerId: { type: ObjectId, ref: 'User', required: true }

});


const RepairRequest = model('RepairRequest', repairRequestSchema);

module.exports = RepairRequest;