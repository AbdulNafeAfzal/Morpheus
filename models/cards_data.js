const mongoose = require('mongoose');

const cardSchema = mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    class: {
        type: String,
        required: true
    },
    DOL: {
        type: Number,
        required: true
    },
    dreamFactor: {
        type: Number,
        required: true
    },
    form: {
        type: String,
        required: true
    },
    habitat: {
        type: String,
        required: true
    },
    
},{ collection: 'cards' })

module.exports = mongoose.model('card', cardSchema);