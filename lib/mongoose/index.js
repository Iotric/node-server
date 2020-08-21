'use strict';

const mongoose = require('mongoose');

const host = process.env.DB_HOST;
const port = process.env.DB_PORT;
const dbname = process.env.DB_NAME;

module.exports = {
    connect: () => {
        try {
            const connectionString = `mongodb://${host}:${port}/${dbname}`;
            const options = {keepAlive: 1, useNewUrlParser: true,useUnifiedTopology: true};
            const uri =  connectionString ||'mongodb://localhost:27017/iotricdb' ;
            mongoose.connect(uri, options).catch(err => {
              logger.error(err, ' Mongo Connection Error:', err);
            });
            return mongoose;
        } catch (e) {
            return logger.error(' Mongo Connection Error:', e);
        }
    }
};
