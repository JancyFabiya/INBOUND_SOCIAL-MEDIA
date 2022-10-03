const StoryModel = require('../Models/StoryModel');
const UserModel = require('../Models/userModel');

const mongoose = require('mongoose');


//Create new story
// const story = async (req,res)=>{
//     // const id = req.params.id
//     const {userId,...other} = req.body
//     // const user = await UserModel.findById({_id:userId})
//     // console.log('user id1',user._id.str);
//     // const id=new mongoose.Types.ObjectId(userId)
//     // console.log('user id2',id);
//     // if(user._id === id){
// // console.log('sdfghjk');
//     try {
//         const newStory =await UserModel.findOneAndUpdate({_id:userId},{$push: {story: other}})
//         console.log('newStory',newStory);
//         res.status(200).json(newStory)

       
//     } catch (error) {
//         res.status(500).json(error)

//     }

// } 
const createStory = async(req,res)=>{
    const newStory = new StoryModel(req.body)
    const story = await StoryModel.findById(newStory.userId)
    try {
        if(story == undefined){
        await newStory.save()
        res.status(200).json(newStory)
        }
        else{
            res.status(403).json("Sorry!!..Only one story can uploaded")
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

//Get story

const getStory = async(req,res)=>{
    const id = req.params.id
    try {
        const story = await StoryModel.findById(id)
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json(error)
    }
}

//Get Timeline Story

// const getTimelineStory = async(req,res)=>{

// const userId =req.params.id
// const currentUserStory = await UserModel.find({_id:userId})
// console.log('aaa',currentUserStory[0].story);

//         const followingStorys = await UserModel.aggregate([
//             {
//                 $match: {
//                     _id: new mongoose.Types.ObjectId(userId)
//                 }
//             },
//             {
//                 $lookup:{
//                     from: "Users",
//                     localField:"following",
//                     foreignField: "_id",
//                     as: "followingStorys"
//                 }
//             },
//             // {
//             //     $lookup:{
//             //         from :'Users',
//             //         localField: 'following',
//             //         foreignField:'_id',
//             //         as: 'followingdetail'
//             //     }
//             // },
//             {
//                 $project: {
//                     followingStorys: 1,
//                     _id: 0
//                 }
//             }
//         ])

//         console.log('cuuurrr',currentUserStory.concat(...followingStorys[0].followingStorys));
//         res.status(200).json(currentUserStory.concat(...followingStorys[0].followingStorys))
// }
const getTimelineStory = async(req,res)=>{
    const userId = req.params.id
    console.log(new mongoose.Types.ObjectId(userId),'id');

    try{
        const currentUserStory = await StoryModel.find({userId : userId}).populate('userId')

        
        const followingStorys = await UserModel.aggregate([
            {
                $match: {
                    _id: new mongoose.Types.ObjectId(userId)
                }
            },
            {
                $lookup:{
                    from: "storys",
                    localField:"following",
                    foreignField: "userId",
                    as: "followingStorys"
                }
            },
            // {
            //     $lookup:{
            //         from :'Users',
            //         localField: 'following',
            //         foreignField:'_id',
            //         as: 'followingdetail'
            //     }
            // },
            {
                $project: {
                    followingStorys: 1,
                    _id: 0
                }
            }
        ])


        // const followUser =  await UserModel.aggregate([
           
            
        //     {
        //         $match: {
        //             _id: new mongoose.Types.ObjectId(userId)
        //         }
        //     },
        //     {
        //         $unwind : "$following"
        //     },
        //     // {
        //     //     $match:{
        //     //         _id: new mongoose.Types.ObjectId(following)
        //     //     }
        //     // },
        //     // {
        //     //     $project:{
        //     //         following:{$toObjectId:"$following"}
        //     //     }
        //     // },
        //     {
        //         $lookup:{
        //             from :'Users',
        //             localField:`{$toObjectId:$following}`,
        //             foreignField:'_id',
        //             as: 'followingdetail'
        //         }
        //     },
        //     // {
        //     //     $unwind : "$followingdetail"
        //     // },
        //     // {
        //     //     $lookup:{
        //     //         from: "storys",
        //     //         localField:"following",
        //     //         foreignField: "userId",
        //     //         as: "followingStorys"
        //     //     }
        //     // },
        //     // {
        //     //     $unwind: "$followingStorys"
        //     // },
        //     {
        //         $project: {
        //             // following :1,
        //             // followingStorys:"$followingStorys",
        //             // followingdetail:1,
        //             _id: 0,
        //             // profilePicture:1,
        //             // firstname:1
        //         }
        //     }
        // ])

        // console.log('@@@@@@@@@');
        // console.log(followUser[0].followingdetail,'followuser');
        // console.log('cuuurrr',currentUserStory.concat(...followingStorys[0].followingStorys));
        res.status(200).json(currentUserStory.concat(...followingStorys[0].followingStorys))
    }catch (error) {
        res.status(500).json(error)
    }
}

//Detail story view
const detailStory = async(req,res)=>{
    const sId = req.params.id
    const crspndngStory = await StoryModel.findById({_id:sId}).populate('userId')
    // const storyUser = await UserModel.aggregate([
    //     {
    //         $match: {
    //             _id: new mongoose.Types.ObjectId(crspndngStory.userId)
    //         }
    //     },
    //     {
    //         $lookup:{
    //             from: "storys",
    //             localField:"following",
    //             foreignField: "userId",
    //             as: "followingStorys"
    //         }
    //     },
    //     {
    //         $project: {
    //             followingStorys: 1,
    //             _id: 0
    //         }
    //     }
    // ])

    console.log('crspndinggggg',crspndngStory);
    console.log('onlyyyyy');
}

module.exports = {createStory,getStory,getTimelineStory,detailStory}