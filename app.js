require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const databaseConnection = require('./src/config/db');
const userRouter = require('./src/modules/user/user.routes');
const productRouter = require('./src/modules/product/product.routes');

const app = express();
const http = require('http').createServer(app);

const PORT = process.env.APP_PORT || 3000;

/**
 * Middleware Setup
 */
app.use(morgan('dev'))
app.use(cors());
app.use('/upload', express.static('upload'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

/**
 * Routes Setup
 */

 app.use('/api/v1.0/user', userRouter);
 app.use('/api/v1.0/product', productRouter);

 http.listen(PORT, () => {
    console.log(`Server is up and running on port:${PORT}.`);
})