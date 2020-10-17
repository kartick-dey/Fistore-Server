const mongoose = require('mongoose');

const { PROVIDER_ENUM } = require('./provider.enum');


/**
 * User Schema
 */
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    provider: [
        {
            uid: { type: String, required: true},
            type: { type: String, required: true, enum: PROVIDER_ENUM}
        }
    ],
}, { timestamps: true});


/**
 * User model
 */
module.exports = mongoose.model('users', userSchema);
module.exports = mongoose.model('users');