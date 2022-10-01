const mongoose = require('mongoose')

const storySchema = mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId,
        ref:'Users'},
    desc:String,
    // likes: [],
    image:String,
},
{
    timestamps:true
})

const StoryModel = mongoose.model("Storys", storySchema)
module.exports=StoryModel