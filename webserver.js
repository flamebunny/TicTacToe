const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.resolve(__dirname, './build')))

app.listen(8003, () => console.log('Example app listening on port 8003!'))