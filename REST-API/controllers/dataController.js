const { hasUser } = require('../middlewares/guards');
const { getAll, create, getById, update, deleteById, getByUserId, getByParams } = require('../services/offerService');
const { parseError } = require('../util/parser');

const dataController = require('express').Router();

dataController.get('/', async (req, res) => {
    try {
        let offers = [];
        if (req.query.where) {
            const userId = JSON.parse(req.query.where.split('=')[1]);
            offers = await getByUserId(userId);
        } else if (req.query.brand || req.query.model || req.query.fromPrice || req.query.toPrice || req.query.fromYear || req.query.toYear || req.query.keyword) {

            const { brand, model, fromPrice, toPrice, fromYear, toYear, keyword } = req.query;
            offers = await getByParams(brand, model, Number(fromPrice), Number(toPrice), Number(fromYear), Number(toYear), keyword);
        } else {
            offers = await getAll();
        }
        res.json(offers);
    } catch (error) {
        const message = parseError(error);
        res.status(400).json({ message });
    }
});


dataController.post('/', hasUser(), async (req, res) => {
    try {
        const data = Object.assign({ _ownerId: req.user._id }, req.body);
        const offer = await create(data);
        res.json(offer);
    } catch (error) {
        const message = parseError(error);
        res.status(400).json({ message });
    }
});


dataController.get('/:id', async (req, res, next) => {
    try {
        const offer = await getById(req.params.id);
        res.json(offer);
    } catch (error) {
        const message = parseError(error);
        res.status(400).json({ message });
    }
});


dataController.put('/:id', hasUser(), async (req, res, next) => {
    try {
        const offer = await getById(req.params.id);
        if (req.user._id != offer._ownerId) {
            return res.status(403).json({ message: 'You cannot edit this offer!' });
        }

        const result = await update(req.params.id, req.body)
        res.json(result);
    } catch (error) {
        const message = parseError(error);
        res.status(400).json({ message });
    }
});


dataController.delete('/:id', hasUser(), async (req, res, next) => {
    try {
        await deleteById(req.params.id);
        res.status(204).end();
    } catch (error) {
        const message = parseError(error);
        res.status(400).json({ message });
    }
});

module.exports = dataController;