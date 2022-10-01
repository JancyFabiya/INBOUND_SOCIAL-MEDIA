const StoryModel = require('../Models/StoryModel');
const mongoose = require('mongoose');
const UserModel = require('../Models/userModel');


//Create new story
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
const getTimelineStory = async(req,res)=>{
    const userId = req.params.id
    try{
        const currentUserStory = await StoryModel.find({userId : userId}).populate('userId')

        const user = await UserModel.find({_id:userId})
        console.log('www',user[0].following);

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
                    followingdetail: 1,
                    _id: 0
                }
            }
        ]).populate('followingStorys.userId')
        console.log('www',followingStorys[0]);
        // console.log('cuuurrr',currentUserStory);
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