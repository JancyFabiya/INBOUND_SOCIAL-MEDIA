const mongoose = require('mongoose')


const userSchema = mongoose.Schema(
    {
        username:{
            type: String,
            required: true
        },
        password:{
            type: String,
            required: true
        },
        firstname:{
            type: String,
            required: true
        },
        lastname:{
            type: String,
            required: true
        },
        isAdmin:{
            type: Boolean,
            default: false
        },
        profilePicture: String,
        coverPicture: String,
        country: String,
        livesin: String,
        worksAt: String,
        relationship: String,
        education:String,
        followers: [],
        following: [],
        verified:{
            type: Boolean,
            required: true,
            default: false
        }

    },
    {timestamps: true}    
    )

    const UserModel = mongoose.model("Users", userSchema)
    module.exports=UserModel