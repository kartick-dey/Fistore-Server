const mongoose = require('mongoose');

const { PROVIDER_ENUM } = require('./provider.enum');


/**
 * User Schema
 */

const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    picture: {
        type: String,
        required: true
    },
    providerUid: { 
        type: String, 
        required: true 
    },
    provider: { 
        required: true, 
        type: String, enum: PROVIDER_ENUM 
    },
}, { timestamps: true });


userSchema.index({ email: true });

/**
 * User model
 */
module.exports = mongoose.model('users', userSchema);
module.exports = mongoose.model('users');