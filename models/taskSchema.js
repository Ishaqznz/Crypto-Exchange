const mongoose = require('mongoose')
const { Schema } = mongoose


const taskSchema = new Schema({

    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    telegram: {
        type: Boolean,
        required: false,
        default: 0
    },

    twitter: {
        type: Boolean,
        required: false,
        default: 0
    },

    earnings: {
        type: Number,
        required: false,
        default: 0
    }

})

const Task = mongoose.model('Task', taskSchema)
module.exports = Task