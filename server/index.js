const express = require('express')
const path = require('path')
const port = process.env.PORT || 4545

const Rollbar = require("rollbar");
const rollbar = new Rollbar({
  accessToken: 'ad24f23a14f145bf905d2defe4ca66b6',
  captureUncaught: true,
  captureUnhandledRejections: true
});

const app = express()
app.use(express())


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

app.get('/kanye', (req, res) => {
    rollbar.log(kanye())
    res.sendFile(path.join(__dirname, '../public/html.index'))
})


app.listen(port, () => console.log(`Oh no! Server ${port} is getting away!`))