import React, { useEffect } from "react";
import story from "../../img/ss.jpg";
import "./Story.css";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar, CardHeader, CardMedia, IconButton } from "@mui/material";
import { BsPlusLg } from "react-icons/bs";
import StoryModal from "../StoryModal/StoryModal";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTimelineStory } from "../../actions/storyAction";
import HorizontalScroll from "react-scroll-horizontal";
import StorysModal from "../StorysModal/StorysModal";
import MoreVertIcon from '@mui/icons-material/MoreVert';


const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);
const Story = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  let { storys, loading } = useSelector((state) => state.storyReducer);
  const params = useParams();
  // console.log("sttttttory", storys);

  useEffect(() => {
    dispatch(getTimelineStory(user._id));
  }, []);

  if (!storys) return <h3>"no storys"</h3>;
  if (params.id) storys = storys.filter((story) => story.userId === params.id);

  return (
    <div className="PostShare">
      <Card sx={{ minWidth: 120,maxWidth:120,minHeight:220,maxHeight:220 }}>
        <StoryModal />
      </Card>

      {loading
        ? "Fetching Storys..."
        : storys.map((story, id) => {
            return (
              <div className="crd">

                <Card sx={{ minWidth: 120,maxWidth:120,minHeight:220,maxHeight:220  }} >
                  <CardHeader
                  avatar={
                    <Avatar src={story.userId.profilePicture ? process.env.REACT_APP_PUBLIC_FOLDER + story.userId.profilePicture : process.env.REACT_APP_PUBLIC_FOLDER + "defaultProfile.png"}/>
                  }
                  // action={
                  //   <IconButton aria-label="settings">
                  //     <MoreVertIcon />
                  //   </IconButton>
                  // }
                  title={story.userId.firstname}
                  // subheader="September 14, 2016"
                />
                {/* <StorysModal story={story} id={id} /> */}

                <CardMedia
        component="img"
        height="100"
        id={id}
        image={story.image ? process.env.REACT_APP_PUBLIC_FOLDER + story.image : " "} alt="" 
      />
        <CardContent>
        <Typography variant="body2" color="text.secondary">
         {story.desc}
        </Typography>
      </CardContent>

                </Card>
              </div>
            );
          })}
    </div>
  );
};

export default Story;
