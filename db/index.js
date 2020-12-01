const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://review-backend:1234@cluster0.blbxh.mongodb.net/cinema?retryWrites=true&w=majority', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db