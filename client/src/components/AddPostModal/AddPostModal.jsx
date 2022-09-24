import * as React from "react";
import "./AddPostModal.css";
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

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);
  const {user}  = useSelector((state) => state.authReducer.authData);
  const loading = useSelector((state)=>state.postReducer.uploading)
  const [image, setImage] = useState(null);
  const imageRef = useRef();
  const desc = useRef();
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  console.log(serverPublic);
  console.log('gfhjk');
  console.log(user._id);
  const dispatch = useDispatch();
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
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value
    }
    if(image){
      const data = new FormData()
      const filename = Date.now() + image.name;
      data.append("name",filename)
      data.append("file",image)
      newPost.image = filename
      // console.log('dfghj123456');
      // console.log(newPost)
      try {

        dispatch(uploadImage(data))
        
      } catch (error) {
        console.log(error);
      }
    }
    console.log('2222')
    console.log(newPost);
    dispatch(uploadPost(newPost))
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
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button> */}
      <div className="Menuspan">
        <span onClick={handleClickOpen}>Add Post</span>
      </div>
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
            <h3>Create Post</h3>

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


