const UserModel = require('../Models/userModel');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const { OAuth2Client } =require("google-auth-library");
const ChatModel = require('../Models/ChatModel');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const VerificationToken = require("../Models/token")
const { generateOTP, mailTransport } = require('../util/mail')
const token = require('../Models/token')
const { isValidObjectId } = require('mongoose')




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

       const OTP = generateOTP()
        const verificationToken = new VerificationToken({
            owner: user._id,
            emailtoken: OTP
        })
        const emailToken = await verificationToken.save();
        console.log(emailToken);

        mailTransport().sendMail({
            from: "jancyfebin555@gmail.com",
            to: user.username,
            subject: 'verify your email account',
            html: `<h1>${OTP}</h1>`
        })


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
        // console.log(user);

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

//verify Email
const verifyEmail = async (req, res) => {
    const { otp, userId } = req.body
    console.log(userId);
    console.log(otp);
    // if(!userId||otp.trim()) return sendError(res,'invalid request,missing parameters!')
    // if (!isValidObjectId()) return sendError(res, 'invalid user id!')
    const user = await UserModel.findById(userId)
    console.log(user);
    if (!user) return sendError(res, 'Sorry,user not found')

    if (user.verified) return sendError(res, 'this account is already verified');

    const emailtoken = await VerificationToken.findOne({ owner: user._id })
    if (!emailtoken) return sendError(res, 'sorry, user not found!');

    const isMatched = await emailtoken.compareToken(otp)
    if (!isMatched) return sendError(res, 'please provide a valid token')

    user.verified = true;

    await VerificationToken.findByIdAndDelete(emailtoken._id)
    await user.save()

    mailTransport().sendMail({
        from: "jancyfebin555@gmail.com",
        to: user.username,
        subject: 'verify your email account',
        html: `<h1>${'email verified successfully'}</h1>`
    })
    res.json({ success: true, message: "your email is verified" })

}



//login admin
const loginAdmin = async(req,res)=>{
    const {username,password} = req.body
    // console.log('login',req.body);

    try {
        const admin = await UserModel.findOne({username: username,isAdmin:'true'})
        // console.log(admin);

        if(admin){
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
    // console.log("hello world")
  
   
    try{
      const{idToken}=req.body;
    
      const verify = await client.verifyIdToken({idToken, audience: "942641737589-8p9d1771hcq0g4e2ukmej1kp5o9r2hoe.apps.googleusercontent.com" })
    //   console.log(verify)
      
  
      const {email, name} = verify.payload;
    //   console.log(email)
      const password = email + process.env.JWT_SECRET
    //   console.log(password)
    
  
      const passwordHash = await bcrypt.hash(password, 12)
  
     
      const user = await UserModel.findOne({email})
    //   console.log(user,"=================")
      if(user){
        // console.log(user)
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
    // console.log(hello)
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
        // console.log({msg:err.message})
      return res.status(500).json({msg:err.message})
  
    }
  }








module.exports = {registerUser,loginUser,googleLogin,loginAdmin,verifyEmail}