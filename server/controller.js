let newKanyeQuote = () => {
    return "'I leave my emojis bart Simpson color' - Kanye West"
}

let oldKanyeQuote = () => {
    return "'My greatest pain in life is that I will never be able to see myself perform live' - Kanye West"
}

let kanyeNow = () => {
    return "'You cray? We cray too! You pray? We pray too!' - Kanye West"
}

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