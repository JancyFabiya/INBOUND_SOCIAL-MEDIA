const mongoose = require('mongoose')

const CommandSchema = new mongoose.Schema({
    postId: { type: String, 
        // ref:'PostModel',
        required: true ,
    },
    // comndId: {
    //     type: String
    // },
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Users'
    },
    text: {
        type: String
    }
}, {
    timestamps: true,
})

const CommandModel = mongoose.model("command", CommandSchema)
module.exports = CommandModel
