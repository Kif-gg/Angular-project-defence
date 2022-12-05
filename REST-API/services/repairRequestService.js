const RepairRequest = require('../models/RepairRequest');


async function createRepairRequest(repairRequest) {
    return RepairRequest.create(repairRequest);
};


module.exports = {
    createRepairRequest
};