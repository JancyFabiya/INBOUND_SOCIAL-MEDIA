const express = require("express");
const {createStory,getStory,getTimelineStory,detailStory} = require("../Controllers/StoryController")


const router = express.Router();


router.post('/',createStory)
router.get('/:id',getStory)
router.get('/:id/timeline',getTimelineStory)
router.get('/:id/detail',detailStory)


module.exports = router;