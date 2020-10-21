const routes = require('express').Router();

const multer = require('multer');
const verifyToken = require('../../services/verifyToken');

const { createProduct, getAllProduct } = require('./product.controller');

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './upload/product/images/'); // Give permission sudo chmod -R 777 upload
    },
    filename: (req, file, callback) => {
        callback(null, new Date().toISOString() + '-' + file.originalname);
    }
});

const fileFilter = (req, file, callback) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' || file.mimetype === 'image/png') {
        callback(null, true);
    } else {
        callback(null, false);
    }
}

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 4
    },
    fileFilter: fileFilter
});
const type = upload.single('image');

routes.post('/', verifyToken, type, createProduct);
routes.get('/', verifyToken, getAllProduct);

module.exports = routes