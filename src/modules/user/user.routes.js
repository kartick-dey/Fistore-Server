const router = require('express').Router();

const verifyToken = require('../../services/verifyToken');
const { createUser, getUserById } = require('./user.controller');

router.post('/', createUser);
router.get('/me', verifyToken, getUserById)


module.exports = router;