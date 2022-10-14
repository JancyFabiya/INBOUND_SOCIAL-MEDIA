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
        followers: {
            type:[
                {
					type: mongoose.Schema.Types.ObjectId,
                    ref: 'Users',

                },
            ],
        },
        following: {
            type:[
                {
					type: mongoose.Schema.Types.ObjectId,
                    ref: 'Users',

                },
            ],
        },
        verified:{
            type: Boolean,
            required: true,
            default: false
        }

    },
    {	
    //     toJSON: {
    //     virtuals: true,
    // },
    // toObject: {
    //     virtuals: true,
    // },
    timestamps: true}    
    )
    // userSchema.virtual('Storys', {
    //     ref: 'Storys',
    //     foreignField: 'userId',
    //     localField: '_id',
    // });

    const UserModel = mongoose.model("Users", userSchema)
    module.exports=UserModel