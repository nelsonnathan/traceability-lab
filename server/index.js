const express = require('express')
const path = require('path')
const port = process.env.PORT || 4545

const app = express()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
})

app.listen(port, () => console.log(`Oh no! Server ${port} is getting away!`))