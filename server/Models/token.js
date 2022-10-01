const mongoose=require('mongoose')
const bcrypt=require('bcrypt')

const verificationTokenSchema=new mongoose.Schema({
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Users',
        required:true
    },
    emailtoken:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        expires:3600,
        default:Date.now()
    }
})
verificationTokenSchema.pre("save",async function(next){
    if(this.isModified("emailtoken")){
        const hash=await bcrypt.hash(this.emailtoken,8);
        this.emailtoken=hash;
    }
    next();
})

verificationTokenSchema.methods.compareToken=async function(emailtoken){
    const result=await bcrypt.compareSync(emailtoken,this.emailtoken)
    return result
}

module.exports = mongoose.model("verificationToken", verificationTokenSchema)