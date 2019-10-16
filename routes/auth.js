const express = require('express');
const router = express.Router();
const auth = require('../auth');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const config = require('config')
const { check, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');

router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user)
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

router.post('/', [
    check('email', 'Please use a valid email').isEmail(),
    check('password', 'Please use a password').exists()
], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        })
    };

    const { email, password } = req.body;

    try {

        let user = await User.findOne({
            email
        })

        if (!user) {
            return res.status(400).json({ errors: [ { msg: 'Something is wrong...'}] });
        };

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ errors: [ { msg: 'Something is wrong...'}] });
        }

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
            if (err) throw err;
                res.json({ token })
            });
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send('There has been a server error')
    }
});

module.exports = router;