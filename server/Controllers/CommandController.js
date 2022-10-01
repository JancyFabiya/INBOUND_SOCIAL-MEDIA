const { default: mongoose } = require('mongoose');
const CommandModel = require('../Models/CommandModel')
const UserModel = require('../Models/userModel');


const cmnd = async(req,res)=>{
    const {postId,senderId,text} = req.body
    const command = new CommandModel({
        postId,
        // comndId,
        senderId,
        text
    })
    try {
        const result = await command.save();
        // console.log(result);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}

const getCmnd = async(req,res)=>{
    const {postId} = req.params;
    try{
        // console.log('dfghjkl');
        const result = await CommandModel.find({postId}).populate('senderId')
        // console.log('command',result);
        // const user =    result.map(async (e)=>{
        //     // console.log('1111',e.senderId); 
        //     return(
        //       await UserModel.aggregate([
        //     {
        //         $match: {
        //             _id: new mongoose.Types.ObjectId(e.senderId)
        //         }
        //     },
        //     {
        //         $lookup : {
        //             from : "commands",
        //             localField:"profilePicture",
        //             foreignField:"senderId",
        //             as:"profileImage"
        //         }
        //     },
        //     // {
        //     //     $lookup : {
        //     //         from : "commands",
        //     //         localField: "firstname",
        //     //         foreignField:"senderId",
        //     //         as:"firstname"
        //     //     }
        //     // },
        //     {
        //         $project:{
        //             profileImage: 1,
        //             // firstname: 1,
        //             _id:0
        //         }
        //     }
        // ])
        // )
        // })
        // console.log('user',user);
       
        res.status(200).json(result);
    }catch(error){
        res.status(500).json(error);
    }
}
module.exports={cmnd,getCmnd}