const mongoose = require('mongoose')
const { Schema } = mongoose


const referralSchema = new Schema({

    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    network: {
        type: Number,
        required: false,
        default: 0
    },

    earnings: {
        type: Number,
        required: false,
        default: 0
    }
})

const Referral = mongoose.model('Referral', referralSchema)
module.exports = Referral