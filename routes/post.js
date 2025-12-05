const mongoose = require("mongoose")
const postSchema = new mongoose.Schema({
    title: String,
    picture: String,
    content: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    date: {
        type: Date,
        default: Date.now()
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "comment"
    }],
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }]
},
    { timestamps: true }
)
module.exports = mongoose.model("post", postSchema)