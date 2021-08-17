const express = require('express')
const path = require('path')
const Rollbar = require("rollbar");
const controller = require('./controller')

const port = process.env.PORT || 4545
const app = express()

const rollbar = new Rollbar({
  accessToken: 'ad24f23a14f145bf905d2defe4ca66b6',
  captureUncaught: true,
  captureUnhandledRejections: true
});

app.use(express())

app.get('/', controller.home)

app.get('/kanye', controller.kanye)

app.get('/oldkanye', controller.oldKanye)

app.get('/newkanye', controller.newKanye)


app.listen(port, () => console.log(`Oh no! Server ${port} is getting away!`))