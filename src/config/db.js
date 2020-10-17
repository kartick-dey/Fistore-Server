const mongoose = require('mongoose');
const assert = require('assert');

// const db_url = process.env.MongoDB_URL;
const db_url = process.env.DB_URL;

/**
 * connection
 */

 mongoose.connect( db_url, {
     useNewUrlParser: true,
     useUnifiedTopology: true,
     useCreateIndex: true
 }, (error, connection) => {
     // check error
     if (error) {
         console.log('Error in dv connection: ', error);
     } else {
        console.log('DB connection successfull....');
        // console.log('Connection: ', connection);
     }
 });