const { Router } = require('express')
const router = new Router()

const students = ['micheal', 'david', 'mellow']

router.get('/students', (req, res, next) => {
    res.send(students)
})

module.exports = router