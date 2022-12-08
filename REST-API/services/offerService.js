const Offer = require("../models/Offer")

async function getAll() {
    return Offer.find({});
};

async function getByParams(brand, model, fromPrice, toPrice, fromYear, toYear, keyWord) {
    const brandSearch = brand || '';
    const modelSearch = model || '';
    const minPriceSearch = Number(fromPrice) || 0;
    const maxPriceSearch = Number(toPrice) || 99999999999;
    const minYearSearch = Number(fromYear) || 1970;
    const maxYearSearch = Number(toYear) || 2025;
    const detailsPart = keyWord || '';
    return Offer
        .find({ vehicleBrand: brandSearch, vehicleModel: modelSearch, description: { $regex: new RegExp(detailsPart, 'i') } })
        .where('price').gte(minPriceSearch).lte(maxPriceSearch)
        .where('year').gte(minYearSearch).lte(maxYearSearch);
};

async function getByUserId(userId) {
    return Offer.find({ _ownerId: userId });
};

async function getById(id) {
    return Offer.find({ _id: id });
};

async function create(offer) {
    return Offer.create(offer);
};

async function update(id, offer) {
    const existingOffer = await Offer.findById(id);

    existingOffer.vehicleBrand = offer.vehicleBrand;
    existingOffer.vehicleModel = offer.vehicleModel;
    existingOffer.price = offer.price;
    existingOffer.year = offer.year;
    existingOffer.description = offer.description;
    existingOffer.imageUrl = offer.imageUrl;

    return existingOffer.save();
};

async function deleteById(id) {
    return Offer.findByIdAndDelete(id);
};



module.exports = {
    getAll,
    getByParams,
    getByUserId,
    getById,
    create,
    update,
    deleteById
};