require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const databaseConnection = require('./src/config/db');
const userRouter = require('./src/modules/user/user.routes')

const app = express();

/**
 * Middleware Setup
 */
app.use(morgan('dev'))
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

/**
 * Routes Setup
 */

 app.use('/api/v1.0/user', userRouter);

app.listen(process.env.APP_PORT, () => {
    console.log(`Server is up and running on port ${process.env.APP_PORT}.`);
})