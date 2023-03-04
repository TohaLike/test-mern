const express = require('express')
const config = require('config')
const mongoose = require('mongoose')

const app = express()

const PORT = config.get('port') || 5000

async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useFindAndModify: true
        })
    } catch (e) {
        console.log('Server error', e.message)
        process.exit(1)
    }
}

start() 

app.listen(PORT, () => {
    console.log(`Server has been started ${PORT}...`)
})


