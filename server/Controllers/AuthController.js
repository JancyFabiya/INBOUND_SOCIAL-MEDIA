const UserModel = require('../Models/userModel');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const { OAuth2Client } =require("google-auth-library");
const ChatModel = require('../Models/ChatModel');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);







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
        const user = await UserModel.findOne({username: username,isAdmin:'false'})
        console.log(user);

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

//login admin
const loginAdmin = async(req,res)=>{
    const {username,password} = req.body
    // console.log('login',req.body);

    try {
        const admin = await UserModel.findOne({username: username})
        console.log(admin);

        if(admin.isAdmin==true){
            const validity = await bcrypt.compare(password,admin.password)
            // validity ? res.status(200).json(user) : res.status(400).json("Wrong Password")
            if(!validity){
                res.status(400).json("Wrong password")
            }else{
                const token = jwt.sign({
                    username: admin.username,
                    id: admin._id
                },process.env.JWT_KEY,{expiresIn: '1h'})
                res.status(200).json({admin,token})
            }
        }else{
            res.status(404).json("User does not exists")
        }
    } catch (error) {
        res.status(500).json({message: error.message})

    }
}

//google login
 const googleLogin =async(req,res)=>{
    console.log("hello world")
  
   
    try{
      const{idToken}=req.body;
    
      const verify = await client.verifyIdToken({idToken, audience: "942641737589-8p9d1771hcq0g4e2ukmej1kp5o9r2hoe.apps.googleusercontent.com" })
      console.log(verify)
      
  
      const {email, name} = verify.payload;
      console.log(email)
      const password = email + process.env.JWT_SECRET
      console.log(password)
    
  
      const passwordHash = await bcrypt.hash(password, 12)
  
     
      const user = await UserModel.findOne({email})
      console.log(user,"=================")
      if(user){
        console.log(user)
         const isMatch = await bcrypt.compare(password, user.password)
         const token = jwt.sign({
            username: user.username,
            id: user._id
        },process.env.JWT_KEY,{expiresIn: '1h'})
   
  
        res.send({
          _id:user.id,
          name:user.name,
          email:user.email,
          isAdmin:user.isAdmin,
          token:token
        
      });
    
  
  
     
      }else{
        console.log("helllo world")
        const newUser = new UserModel({
          name, email, password: passwordHash
      })
    const hello=  await newUser.save()
    console.log(hello)
    const token = jwt.sign({
        username: user.username,
        id: user._id
    },process.env.JWT_KEY,{expiresIn: '1h'})
      res.send({
        _id:user.id,
        name:user.name,
        email:user.email,
        isAdmin:user.isAdmin,
        token:token
    });
  
  
      }
      
  
    }catch(err){
        console.log({msg:err.message})
      return res.status(500).json({msg:err.message})
  
    }
  }








module.exports = {registerUser,loginUser,googleLogin,loginAdmin}