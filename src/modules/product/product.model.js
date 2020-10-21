const mongoose = require('mongoose');

const PRODUCT_ENUM = require('./product.enum');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    fishName: {
        type: String,
        required: true
    },
    fishType: {
        type: String,
        required: true,
        enum: PRODUCT_ENUM.FISHTYPE_ENUM
    },
    price: {
        type: Number,
        required: true,
    },
    unit: {
        type: String,
        required: true,
        enum: PRODUCT_ENUM.UNIT_ENUM
    },
    location: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: true
    },
});

module.exports = mongoose.model('products', productSchema);
module.exports = mongoose.model('products');