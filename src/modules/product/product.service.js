const productModel = require('./product.model');

const createProductInDB = async (productData) => {
    try {
        const productInfo = await productModel.create(productData);
        await productInfo.save();
        return productInfo;
    } catch (error) {
        throw error;
    }
};

const getAllProductFromDB = async () => {
    try {
        const products = await productModel.find();
        return products;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createProductInDB,
    getAllProductFromDB
};
