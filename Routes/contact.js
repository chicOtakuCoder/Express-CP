const express = require('express')
const checkTime = require('../middleware/checkTime')
const router = express.Router()

router.get('/', checkTime, (req, res) => {
    res.render('contact-us')
})

module.exports = router