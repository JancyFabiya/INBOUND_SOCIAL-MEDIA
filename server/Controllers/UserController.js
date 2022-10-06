const UserModel = require('../Models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

// get all users
 const getAllUsers = async (req,res) =>{
    try {
        let users = await UserModel.find({isAdmin:false});
        let logUser = await UserModel.findById(req.params.id)
         let follow =logUser.following
         let newUser = users.filter((e)=>{
            if(!follow.includes(e._id)){
                return e
            }
         })
        //  console.log(newUser,'//////////');
         newUser = newUser.map((user)=>{
            const {password,...otherDetails} = user._doc
            return otherDetails
        })
        // console.log('@@@@',users);

        res.status(200).json(newUser)
    } catch (error) {
        res.status(500).json(error)
    }
}

//get a User
const getUser = async(req, res)=>{
    const id = req.params.id;
    try {
        const user = await UserModel.findById(id)
        if(user){
            const {password, ...otherDetails} = user._doc
            res.status(200).json(otherDetails)
        } else {
            res.status(404).json("No such user exists");
          }

    } catch (error) {
        res.status(500).json(error)
    }
}
//Search user
const searchUser = async(req,res)=>{
    const na = req.body['firstname']
    console.log('search',req.body);
    try {
        const user = await UserModel.find()
        const srUser = user.filter((e)=>e.firstname.includes(na))
        console.log(srUser,'searchuser');
        res.status(200).json(srUser)
    } catch (error) {
        res.status(500).json(error)
    }
}

//update a user
const updateUser = async(req,res)=>{
    const id = req.params.id
    const {_id,password} = req.body.data;
// console.log('id',id);
// console.log('_id',_id);
// console.log('reqbody',req.body);
    if(id === _id ) {
        try {

            // if(password){
            //     const salt = await bcrypt.genSalt(10);
            //     req.body.password = await bcrypt.hash(password,salt)
            // }
            const user = await UserModel.findByIdAndUpdate(id,req.body,{new: true})
            // console.log('user:',user);
            const token = jwt.sign(
                {username:user.username, id: user._id},
                process.env.JWT_KEY,
                {expiresIn: "1h"}
            )
            res.status(200).json({user,token})
        } catch (error) {
            res.status(500).json(error);
            
        }
    }else{
        res.status(403).json("Access Denied! you can only update your own profile")
    }
}

//delete user
const deleteUser =async (req,res)=>{
    const id = req.params.id
    const {currentUserId,currentUserAdminStatus} =req.body
     
    if(currentUserId === id || currentUserAdminStatus){
        try {
            await UserModel.findByIdAndDelete(id)
            res.status(200).json("User deleted nsuccessfully")
        } catch (error) {
            res.status(500).json(error);
            
        }
    }else{
        res.status(403).json("Access Denied! you can only delete your own profile")
    }
}

//Follow a user
const followUser = async (req,res)=>{
    const id =req.params.id
    const {_id}= req.body
    if(_id === id){
        res.status(403).json("Action forbidden")
    }else{
        try {
            const followUser = await UserModel.findById(id)
            const followingUser =await UserModel.findById(_id)

            if(!followUser.followers.includes(_id)){
                await followUser.updateOne({$push : {followers: _id}})
                await followingUser.updateOne({$push:{following: id}})
                res.status(200).json("User followed!")
            }else{
                res.status(403).json("User is Already followed by you")
            }
        } catch (error) {
            res.status(500).json(error);

        }
    }
}

//UnFollow a user
const unFollowUser = async (req,res)=>{
    const id =req.params.id
    const {_id}= req.body
    if(_id === id){
        res.status(403).json("Action forbidden")
    }else{
        try {
            const followUser = await UserModel.findById(id)
            const followingUser =await UserModel.findById(_id)

            if(followUser.followers.includes(_id)){
                await followUser.updateOne({$pull : {followers: _id}})
                await followingUser.updateOne({$pull:{following: id}})
                res.status(200).json("User Unfollowed!")
            }else{
                res.status(403).json("User is not followed by you")
            }
        } catch (error) {
            res.status(500).json(error);

        }
    }
}


// Find friend details
const friendPerson = async(req,res)=>{
    try{
        const friend = await UserModel.findById(req.params.id)

        res.status(200).json(friend)
    }catch(error){
        res.status(500).json(error)
    }
}

// // stories
// const story = async(req,res)=>{
//     const id = req.
// }

module.exports = {getAllUsers,getUser,updateUser,deleteUser,followUser,unFollowUser,friendPerson,searchUser}