import * as React from "react";
import "./CommandModal.css";
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
  DialogContentText,
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
import Comment from "../../img/comment.png";
import {  uploadCommand } from "../../actions/commandAction";
import { getCmnd } from "../../api/CommandRequest";
// import { getCmnd } from "../../actions/commandAction";
import { useEffect } from "react";
import { getUser } from "../../api/UserRequest";
import Comments from "../Comments/Comments";


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

export default function CustomizedDialogs({id}) {
  console.log('data from post',id);
  const [open, setOpen] = useState(false);
  const { user } = useSelector((state) => state.authReducer.authData);
  const loading = useSelector((state) => state.postReducer.uploading);
  const [command, setCommand] = useState([]);
  const [cmts, setCmts] = useState(false)
  // const {command} =useSelector((state)=>state.commandReducer)

const [scroll, setScroll] = React.useState('paper');

  const desc = useRef();
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

  const dispatch = useDispatch();



// useEffect(()=>{
//   dispatch(getCmnd(id))
// },[])


console.log('dispatch',command);

  useEffect(()=>{
    const fetchCmnd = async()=>{
        const {data} = await getCmnd(id);
        // console.log('command',data);
        setCommand(data)
    }
    fetchCmnd()
  },[cmts])
  // console.log('valuuuee',command);



  const reset = () => {
    desc.current.value = " ";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCommand = {
        senderId: user._id,
      postId:id,
      text: desc.current.value,
    };
    dispatch(uploadCommand(newCommand));
    setCmts(!cmts)
   
   
    reset();
    // setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
    
      <div className="Menuspan">
       
        <img src={Comment} alt="" onClick={handleClickOpen} style={{cursor:"pointer"}}/>
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
           
            <h3>Comment </h3>

            <div className="PostShare">
             
              <Avatar
                src={
                  user.profilePicture
                    ? serverPublic + user.profilePicture
                    : serverPublic + "defaultProfile.png"
                }
              />
              <div>
             

                <TextField
                  inputRef={desc}
                  required
                  id="outlined-textarea"
                  label="Write a comment..."
                  className="infoInput"
                
                  color="warning"
                  
                  multiline
                />
                </div>
                <div className="buttn">
                <button
                  className="button infoButton"
                  style={{ width: "8rem" }}
                  onClick={handleSubmit}
                  disabled={loading}
                >
                  {loading ? "Posting..." : "Send"}
                </button>
                </div>
              
           </div>

           
          </form>
          <div className="cmnd">
            <DialogContent dividers={scroll === 'paper'}>

            <DialogContentText
            
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <h4>Comments</h4>
           
            {command.map((snd,d)=>{
                return(
                  
                    <div className="loop">
                    <img src={
                        snd.senderId.profilePicture
                        ? serverPublic + snd.senderId.profilePicture
                        : serverPublic + "defaultProfile.png"
                    } alt="" 
                    className="senImg"
                    key={d}/>
                    <div className="sname">
                        <span>{snd.senderId.firstname}</span>
                    </div>
                    <div className="commands">
                      <span>{snd.text}</span>
                    </div>
                    
                </div>
                 )
             })} 
             </DialogContentText>
             </DialogContent>
           
          </div>
        </DialogContent>
        <DialogActions>
         
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
