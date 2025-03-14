const mongoose = require('mongoose')
const { Schema } = mongoose

const walletSchema = new Schema({

    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    balance: {
        type: String,
        required: true,
        default: 0
    },

})


const Wallet = mongoose.model('Wallet', walletSchema)
module.exports = Wallet