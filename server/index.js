const express = require('express');
const bodyParser  = require('body-parser');
// import mongoose from 'mongoose';

var db=require('./config/connection')
const dotenv =require('dotenv');
const cors =require('cors');


const AuthRoute = require('./Routes/AuthRoute.js')
const UserRoute = require('./Routes/UserRoute.js')
const PostRoute = require('./Routes/PostRoute')


//Routes

const app = express();

//Middleware

app.use(bodyParser.json({limit:'30mb',extended: true}))
app.use(bodyParser.urlencoded({limit:'30mb',extended: true}))
dotenv.config();
app.use(cors())



const PORT =process.env.PORT || 5000;

app.listen(PORT,console.log(`Server started on PORT ${PORT}`))

//usage of routes
app.use('/auth',AuthRoute)
app.use('/user',UserRoute)
app.use('/post',PostRoute)