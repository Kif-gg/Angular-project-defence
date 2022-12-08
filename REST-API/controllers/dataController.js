const { hasUser } = require('../middlewares/guards');
const { getAll, create, getById, update, deleteById, getByUserId, getByParams } = require('../services/offerService');
const { parseError } = require('../util/parser');

const dataController = require('express').Router();

dataController.get('/', async (req, res) => {
    console.log(req.params)
    try {
        let offers = [];
        if (req.query.where) {
            const userId = JSON.parse(req.query.where.split('=')[1]);
            offers = await getByUserId(userId);
        } else if (req.query.brand) {
            const { brand, model, fromPrice, toPrice, fromYear, toYear, keyWord } = req.query;
            offers = await getByParams(brand, model, fromPrice, toPrice, fromYear, toYear, keyWord);
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
    // req.params.id = req.params.id.slice(0, req.params.id.length - 1);
    console.log(req.params);
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