const express = require("express");
const router = express.Router();
const { user_info: { create , getData } } = require('../controllers');

router.post("/", create);

router.get("/friends", getData);

module.exports = router;