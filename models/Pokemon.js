const mongoose = require('mongoose')

const pokemonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    pokemonImage: {
        type: String,
        required: true,
        default: 'no-image'
        
    },
    pokemonId: {
        type: Number,
        required: true
    },
    height: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Pokemon', pokemonSchema)