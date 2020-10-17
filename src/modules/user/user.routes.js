const router = require('express').Router();
const {check, validationResult } = require('express-validator')

const createUser = require('./user.controller');

router.post('/', createUser);


module.exports = router;