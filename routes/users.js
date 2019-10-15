const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require("express-validator");

const User = require('../models/User');

router.post('/', [
    check('username', 'Please input a valid username').not().isEmpty(),
    check('name', 'Please input a valid name').not().isEmpty(),
    check('email', 'Please input a valid email').isEmail(),
    check('password', 'Please input a valid password').isLength({
        min: 8
    })
], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
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
            email
        })
        
        if (user) {
            return res.status(400).json({
                errors: [{
                    msg: 'A user already exists with this email'
                }]
            })
        }

        user = new User({
            name,
            email,
            username,
            password
        })

        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password,salt);

        await user.save();

        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign(
            payload, 
            config.get('jwtSecret'),
        { expiresIn: 360000 },
        ( err, token ) => {
            if(err) throw err;
            res.json({ token })
        });
        
    } catch (error) {
        console.log(err.message);
        res.status(500).send('Server error')
    }
});

module.exports = router;