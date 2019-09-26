const express = require('express')
const cors = require('cors')
const {Router} = express
const router = new Router()

const app = express()

const middleware = cors()

app.use(middleware)
app.use(router)

const port = process.env.PORT || 5000

router.get("/test", (req, res) => {
    res.send({
        message: 'Hello World'
    })
})

router.get("/test2", (req, res) => {
    res.send({
        message: 'Hello World'
    })
})

app.listen(port, () => {
    console.log(`Started Listening on port ${port}`)
})

