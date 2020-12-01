const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Movie = new Schema(
    {
        name: { type: String, required: true },
        duration: { type: String, required: true },
        comments: { type: String, required: true },
        url: {type: String, required: true},
    },
    { timestamps: true },
)

module.exports = mongoose.model('movies', Movie)
