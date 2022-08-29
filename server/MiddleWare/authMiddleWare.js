const jwt = require('jsonwebtoken')
const dotenv =require('dotenv');

dotenv.config();
const secret = process.env.JWT_KEY;
const authMiddleWare = async (req,res,next) =>{
    try {
        const token = req.headers.authorization.split(" ")[1];
        console.log(token); 
        if(token){
            const decoded = jwt.verify(token,secret);
            console.log(decoded);
            req.body._id = decoded?.id;
        }
        next();
    } catch (error) {
        console.log(error);
    }
}

module.exports={ authMiddleWare};