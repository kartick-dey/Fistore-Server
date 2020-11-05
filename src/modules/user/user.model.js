const mongoose = require('mongoose');
const { string } = require('yup');

const { PROVIDER_ENUM } = require('./provider.enum');


/**
 * User Schema
 */

const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: {
        type: String
    },
    fisheryName: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    phone: {
        type: String
    },
    picture: {
        type: String
    },
    providerUid: { 
        type: String
    },
    provider: {
        type: String, enum: PROVIDER_ENUM 
    },
}, { timestamps: true });


userSchema.index({ email: true });

/**
 * User model
 */
module.exports = mongoose.model('users', userSchema);
module.exports = mongoose.model('users');