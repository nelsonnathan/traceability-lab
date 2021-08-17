const Rollbar = require("rollbar")
const path = require('path')

let newKanyeQuote = () => {
    return "'I leave my emojis bart Simpson color' - Kanye West"
}

let oldKanyeQuote = () => {
    return "'My greatest pain in life is that I will never be able to see myself perform live' - Kanye West"
}

let kanyeNow = () => {
    return "'You cray? We cray too! You pray? We pray too!' - Kanye West"
}

const rollbar = new Rollbar({
    accessToken: 'ad24f23a14f145bf905d2defe4ca66b6',
    captureUncaught: true,
    captureUnhandledRejections: true
  });

module.exports = {
    newKanye: (req, res) => {
        try {
            newKanyeQuote()
        } catch (warning) {
            console.log(warning)
            rollbar.warning(warning)
        }
    },

    oldKanye: (req, res) => {
        try {
            oldKanyeQuote()
        } catch (criticalError) {
            console.log(criticalError)
            rollbar.critical(criticalError)
        }
    },

    kanye: (req, res) => {
        try {
            kanyeNow() 
        } catch (error){
            console.log(error)
            rollbar.error(error)
        }
    },

    home: (req, res) => {
        rollbar.log('Hello World!')
        res.sendFile(path.join(__dirname, '../public/index.html'))
    }
}