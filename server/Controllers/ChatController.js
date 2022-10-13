const ChatModel = require('../Models/ChatModel')

// const createChat = async(req,res)=>{
//     const newChat = new ChatModel({
//         members: [req.body.senderId, req.body.receiverId]
//     });
//     try {
//         const result = await newChat.save();
//         res.status(200).json(result);
//     } catch (error) {
//         res.status(500).json(error)
        
//     }
// }
const createChat = async(req,res)=>{
    const {senderId,receiverId} = req.body
    const newChat = new ChatModel({
        members: [senderId,receiverId]
    });
    try {
        const result = await newChat.save();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error)
        
    }
}
const userChats = async(req,res)=>{
    try {
        const chat =await ChatModel.find({
            members: {$in: [req.params.userId]}
        })
        res.status(200).json(chat)
    } catch (error) {
        res.status(500).json(error)
    }
}

const findChat = async(req,res)=>{
    try {
        const chat = await ChatModel.findOne({
            members: {$all: [req.params.firstId,req.params.secondId]}
        })
        res.status(200).json(chat)
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports={createChat,userChats,findChat}