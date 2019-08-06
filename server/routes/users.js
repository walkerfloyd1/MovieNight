const express = require("express");
const router = express.Router();
const { register, login, loggedIn, logout } = require('../controllers/user');

router.use('/addInfo', require('./users_info'));

router.get('/loggedIn', loggedIn);

router.post('/register', register);

router.post('/login', login);

router.get('/logout', logout);

module.exports = router;