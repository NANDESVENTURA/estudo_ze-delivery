const mongoose = require('mongoose')

const Parceiros = mongoose.model('Parceiros', {
    tradingName: String,
    ownerName: String,
    document: {
        type:String,
        unique: true
    },
    coverageArea: Map,
    address: Map
})

module.exports = Parceiros