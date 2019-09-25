const express = require('express')

const port = 5000

const app = express()


app.get("/test", (req, res) => {
    res.send({
        message: 'Hello World'
    })
})

app.listen(() => {
    console.log(`Started Listening on port ${port}`)
})

