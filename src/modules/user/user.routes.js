const router = require('express').Router();
const { userAuth } = require('./user');

const { createUser, getUserById } = require('./user.controller');

router.post('/', createUser);
router.get('/me', userAuth, getUserById)


module.exports = router;