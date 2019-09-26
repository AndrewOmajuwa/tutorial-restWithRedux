const { Router } = require('express')
const router = new Router()

const teachers = ['rein', 'david', 'Kelley']

router.get('/teachers', (req, res, next) => {
    res.send(teachers)
})

module.exports = router