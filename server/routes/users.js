const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config')
const { check, validationResult } = require("express-validator");

const User = require('../models/Users');

router.post('/', [
    check('name', 'Please input a valid name').not().isEmpty(),
    check('email', 'Please provide a valid email').not().isEmpty(),
    check('password', 'Please input a valid password').isLength({
        min: 8
    })
], async (
    req,
    res
) => {
    const errors = validationResult(req);
    if(errors) {
        return res.status(400).json({
            errors: errors.array()
        });
    }

    const {
        name,
        email,
        password,
        username
    } = req.body;

    try {

        let user = await User.findOne({
            username
        })
        
    } catch (error) {
        
    }
})

module.exports = router;