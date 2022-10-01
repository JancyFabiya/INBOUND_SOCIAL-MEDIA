import * as React from "react";
// import "./AddPostModal.css";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { UilPen } from "@iconscout/react-unicons";
import {
  Avatar,
  Card,
  CardMedia,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import Profile from "../../img/daneriyas.jpg";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { useRef } from "react";
import { useState } from "react";
import { UilTimes } from "@iconscout/react-unicons";
import { useDispatch, useSelector } from "react-redux";
import { uploadImage } from "../../actions/uploadAction";
import { uploadPost } from "../../actions/uploadAction";
import { BsPlusLg } from 'react-icons/bs';
import { uploadSImage, uploadStory } from "../../actions/uploadStoryAction";
import { useEffect } from "react";
import { detailStory } from "../../actions/storyAction";
// import { detailStory } from "../../api/StoryRequest";



const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs({story,id}) {
  // const {story}=props
    console.log('select one story',story);
    const [stry,setStry] = useState([])
  const [open, setOpen] = React.useState(false);
  const {user}  = useSelector((state) => state.authReducer.authData);
  const loading = useSelector((state)=>state.storyReducer.uploading)
  const [image, setImage] = useState(null);
  const imageRef = useRef();
  const desc = useRef();
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  console.log(serverPublic);
  console.log('gfhjk');
  console.log(user._id);
  const dispatch = useDispatch();

  const {storys} = useSelector((state)=> state.storyReducer);

  console.log('selected story',storys);
//   useEffect(()=>{
//     const fetchStory = async()=>{
//    const {data} = await detailStory(story._id)
//    console.log('fetch story',data);
//    setStry(data)
//     }
//     fetchStory()
//   },[])

// if(stry){
//   console.log('222222stttt',stry);
// }


useEffect(()=>{
  dispatch(detailStory(story._id))
},[]);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage(img);
    }
  };

  const reset = () => {
    setImage(null);
    desc.current.value =" "
  }
  const fetchData = async (e) => {
    e.preventDefault();
    const {data} = await detailStory(e)

   setStry(data)

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStory = {
      userId: user._id,
      desc: desc.current.value
    }
    if(image){
      const data = new FormData()
      const filename = Date.now() + image.name;
      data.append("name",filename)
      data.append("file",image)
      newStory.image = filename
      // console.log('dfghj123456');
      // console.log(newPost)
      try {

        dispatch(uploadSImage(data))
        
      } catch (error) {
        console.log(error);
      }
    }
    console.log('2222')
    console.log(newStory);
    dispatch(uploadStory(newStory))
    reset()
    setOpen(false);

  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
   
      {/* <div className="plus">
      <BsPlusLg onClick={handleClickOpen}/>
      </div> */}
      
      {/* <Card sx={{ minWidth: 120 }} onClick={handleClickOpen}> */}
         
        
      <CardMedia
        component="img"
        height="150"
        image={story.image ? process.env.REACT_APP_PUBLIC_FOLDER + story.image : " "} alt="" 
        // onClick={fetchData(story._id)}
        id={id}
        onClick={handleClickOpen}
      />
   
      
    {/* </Card> */}
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        ></BootstrapDialogTitle>
        <DialogContent>
          <form>
            {/* <div className='PostSide'> */}
            {/* <h3>Make a Story</h3> */}
            <h3>{stry.desc}</h3>

            <div className="PostShare">
              <div></div>
              <Avatar src={user.profilePicture ? serverPublic + user.profilePicture : serverPublic + "defaultProfile.png"} />
              <div>
                {/* <input 
                ref= {desc}
                required
                type="text" placeholder="What's on your mind,Daenerys?"/> */}



                <TextField
                  inputRef = {desc}
                  required
                  id="outlined-textarea"
                  label="What's on your mind,Daenerys?"
                  className="infoInput"
                  // name="livesin"
                  color="warning"
                  // onChange={handleChange}
                  // value={data.lastname}
                  multiline
                />

                <div className="postOptions">
                  <div
                    className="option"
                    style={{ color: "var(--photo)" }}
                    onClick={() => imageRef.current.click()}
                  >
                    <UilScenery />
                    Photo
                  </div>
                  {/* <div className="option" style={{ color: "var(--video)" }}>
                    <UilPlayCircle />
                    Video
                  </div>
                  <div className="option" style={{ color: "var(--location)" }}>
                    <UilLocationPoint />
                    Location
                  </div>
                  <div className="option" style={{ color: "var(--shedule)" }}>
                    <UilSchedule />
                    Shedule
                  </div> */}
                </div>
                {/* <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="story"
                    control={<Radio />}
                    label="Story"
                  />
                  <FormControlLabel
                    value="post"
                    control={<Radio />}
                    label="Post"
                  />
                </RadioGroup> */}
                <button
                  className="button infoButton"
                  style={{ width: "8rem" }}
                  onClick={handleSubmit}
                  disabled = {loading}
                >
                 {loading ? "Uploading...": "Share"}
                </button>
                <div style={{ display: "none" }}>
                  <input
                    type="file"
                    name="myImage"
                    ref={imageRef}
                    onChange={onImageChange}
                  />
                </div>
              </div>
            </div>
            {image && (
              <div className="preViewImage">
                <UilTimes onClick={() => setImage(null)} />
                <img src={URL.createObjectURL(image)} alt="" />
              </div>
            )}
            {/* </div> */}
          </form>
        </DialogContent>
        <DialogActions>
          {/* <Button autoFocus onClick={handleClose}>
            Save changes
          </Button> */}
          {/* <button className="button infoButton" style={{ width: "8rem" }}>
            Save Changes
          </button> */}
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}


