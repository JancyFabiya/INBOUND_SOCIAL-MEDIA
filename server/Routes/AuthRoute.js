const express = require("express");
const { registerUser,loginUser,googleLogin,loginAdmin} = require("../Controllers/AuthController");

const router = express.Router();

router.post('/register',registerUser)
router.post('/login',loginUser)
router.post('/googlelogin',googleLogin)
router.post('/admin',loginAdmin)

module.exports = router;