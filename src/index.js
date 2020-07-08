const express = require('express')
require('./db/mongoose')
const deviceRouter = require('./routers/device')

const app = express()
const port = process.env.PORT || 5000

// parse json
app.use(express.json())

// device router
app.use(deviceRouter)

// Run server
app.listen(port, () => {
    console.log('Server is up on port: ' + port)
})