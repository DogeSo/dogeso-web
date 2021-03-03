const express = require('express')
const app = express()
const path = require('path')

const PORT = 80

app.use(express.static(path.resolve(__dirname, '../../build')))

app.listen(PORT, () => console.log(`Server initialized, listening port ${PORT}`))