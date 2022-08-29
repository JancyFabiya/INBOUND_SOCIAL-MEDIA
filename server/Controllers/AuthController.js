const UserModel = require('../Models/userModel');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


//Registering a new User
const registerUser = async(req,res)=>{
    // const {username,password,firstname,lastname} = req.body;

    const salt =await bcrypt.genSalt(10)
    const hashedPass = await bcrypt.hash(req.body.password,salt)

    // const newUser = new UserModel({username,password: hashedPass,firstname,lastname})
    req.body.password=hashedPass
    const newUser = new UserModel(req.body)
    const {username}=req.body
    try {
        const oldUser = await UserModel.findOne({username})
        if(oldUser){
            return res.status(400).json({message:"Username is already registered!"})
        }
       const user = await newUser.save()

        const token = jwt.sign({
            username: user.username,
            id: user._id
        },process.env.JWT_KEY,{expiresIn: '1h'})

        res.status(200).json({user,token})  //indicates that the request has succeeded.
    } catch (error) {
        res.status(500).json({message: error.message})
       
    }

}

// login User
const loginUser = async(req,res)=>{
    const {username,password} = req.body
    // console.log('login',req.body);

    try {
        const user = await UserModel.findOne({username: username})

        if(user){
            const validity = await bcrypt.compare(password,user.password)
            // validity ? res.status(200).json(user) : res.status(400).json("Wrong Password")
            if(!validity){
                res.status(400).json("Wrong password")
            }else{
                const token = jwt.sign({
                    username: user.username,
                    id: user._id
                },process.env.JWT_KEY,{expiresIn: '1h'})
                res.status(200).json({user,token})
            }
        }else{
            res.status(404).json("User does not exists")
        }
    } catch (error) {
        res.status(500).json({message: error.message})

    }
}

module.exports = {registerUser,loginUser}