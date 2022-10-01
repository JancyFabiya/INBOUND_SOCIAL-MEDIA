const express = require("express");
const {cmnd,getCmnd} = require("../Controllers/CommandController");

const router = express.Router();

router.post('/',cmnd)
router.get('/:postId',getCmnd)

module.exports = router;