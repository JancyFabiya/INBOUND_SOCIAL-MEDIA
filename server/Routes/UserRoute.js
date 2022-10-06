const express = require("express");
const {getAllUsers, getUser, updateUser, deleteUser, followUser, unFollowUser,friendPerson,searchUser } = require("../Controllers/UserController");
// const {authMiddleWare} = require("../MiddleWare/authMiddleWare")
const router = express.Router();

router.get('/:id/logUser',getAllUsers)
router.get('/:id', getUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)
router.put('/:id/follow',followUser)
router.put('/:id/unfollow',unFollowUser)
router.get('/:id/frnd',friendPerson)
router.post('/search',searchUser)

module.exports = router;