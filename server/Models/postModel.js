const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId,
        ref:'Users'},
    desc:String,
    likes: [],
    image:String,
},
{
    timestamps:true
})

//virtual populate
// postSchema.virtual('comments',{
//     ref:'CommandModel',
//     foreignField:'postId',
//     localField : '_id'
// })

const PostModel = mongoose.model("Posts", postSchema)
module.exports=PostModel