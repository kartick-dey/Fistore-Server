const Yup = require('yup');

const buildProduct = require('./buildProduct');
const PRODUCT_ENUM = require('./product.enum');
const { createProductInDB, getAllProductFromDB } = require('./product.service')

const createProduct = async (req, res) => {
    if (!req.file) {
        res.status(400).json({ message: 'Please upload a image.'});
        return;
    }
    const { userId, username, fisheryName, fishName, fishCategory, price, unit, location, contact} = req.body;

    const bodySchema = Yup.object().shape({
        userId: Yup.string().required(),
        username: Yup.string().required(),
        fisheryName: Yup.string().required(),
        fishName: Yup.string().required(),
        fishCategory: Yup.string().oneOf(PRODUCT_ENUM.FISHCATEGORY_ENUM).required(),
        price: Yup.number().required(),
        unit: Yup.string().oneOf(PRODUCT_ENUM.UNIT_ENUM).required(),
        location: Yup.string().required(),
        // availableTill: Yup.string().required(),
        contact: Yup.number().required()
    });

    try {
        await bodySchema.validate({ userId, username, fisheryName, fishName, fishCategory, price, unit, location, contact });
        const productData = buildProduct(req.body, req.file.path );
        const productInfo = await createProductInDB(productData);
        res.status(200).json(productInfo);
    } catch (error) {
        console.log("Error while create a product: ", error);
        res.status(400).json({ messsage: error.message });
    }
};

const getAllProduct = async (req, res) => {
    try {
        const products = await getAllProductFromDB();
        res.status(200).json(products);        
    } catch (error) {
        console.log("Error while get all product");
        res.status(400).json({ messsage: error.message });
    }
};

module.exports = {
    createProduct,
    getAllProduct
};