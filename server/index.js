const express = require('express')
const cors = require('cors')
const controller = require('./controller')

const port = process.env.PORT || 4545
const app = express()

app.use(express.json())
app.use(cors)

app.get('/', controller.home)

app.get('/kanye', controller.kanye)

app.get('/oldkanye', controller.oldKanye)

app.get('/newkanye', controller.newKanye)


app.listen(port, () => console.log(`Oh no! Server ${port} is getting away!`))