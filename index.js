const express = require('express')
const router = require('./router')
const cors = require('cors')
const studentRouters = require('./studentRouter')
const teacherRouters = require('./teacherRouter')


const app = express()

const middleware = cors()

app.use(middleware)

app.use(router)
app.use(studentRouters)
app.use(teacherRouters)


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

