const { hasUser } = require('../middlewares/guards');
const { createRepairRequest } = require('../services/repairRequestService');
const { parseError } = require('../util/parser');

const repairRequestController = require('express').Router();

repairRequestController.post('/', hasUser(), async (req, res) => {
    try {
        const data = Object.assign({}, req.body);
        const request = await createRepairRequest(data);
        res.json(request);
    } catch (error) {
        const message = parseError(error);
        res.status(400).json({ message });
    }
});


module.exports = repairRequestController;