const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    biome: {
        type: String,
        required: false
    },
    avatar: {
        type: String,
        required: false
    },
    coins: {
        type: Number,
        required: false
    },
    cards: [{
        _id: String,
    }],
})

module.exports = mongoose.model('user', userSchema);