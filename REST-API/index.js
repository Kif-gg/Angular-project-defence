const express = require('express');
const mongoose = require('mongoose');

const cors = require('./middlewares/cors');
const authController = require('./controllers/authController');
const dataController = require('./controllers/dataController');
const adminController = require('./controllers/adminController');
const repairRequestController = require('./controllers/repairRequestController');
const trimBody = require('./middlewares/trimBody');
const session = require('./middlewares/session');

const connectionString = 'mongodb://localhost:27017/Angular-defence';

start();

async function start() {

    try {
        await mongoose.connect(connectionString);
        console.log('Database connected.');

        const app = express();

        app.use(express.json());
        app.use(cors());
        app.use(trimBody());
        app.use(session());

        app.get('/', (req, res) => {
            res.json({ message: 'REST service operational' });
        });

        app.use('/users', authController);
        app.use('/data/offers', dataController);
        app.use('/o074dm1n', adminController);
        app.use('/data', repairRequestController)




        app.listen(3030, () => console.log('REST service started.'));
    } catch (error) {
        console.log(error);
        console.log(error.message);
    }

};