import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import {UilPen} from '@iconscout/react-unicons'
import { TextField } from '@mui/material';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { uploadImage } from '../../actions/uploadAction';
import { updateUser } from '../../actions/userAction';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
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
            position: 'absolute',
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

export default function CustomizedDialogs(data) {
  const [open, setOpen] = React.useState(false);
const {password, ...other} = data;
const [formData, setFormData] = useState(other)
const [profileImage, setProfileImage] = useState(null)
const [coverImage,setCoverImage] = useState(null)
const dispatch = useDispatch()
const param = useParams()
const {user} = useSelector((state)=>state.authReducer.authData)
// console.log('modal',data)

const handleChange = (e)=>{
  setFormData({...formData,[e.target.name]:e.target.value})
}

const onImageChange =(event)=>{
  if (event.target.files && event.target.files[0]){
    let img = event.target.files[0];
    event.target.name === "profileImage"
    ? setProfileImage(img)
    : setCoverImage(img);
  }
}

const handleSubmit = (e)=>{
  e.preventDefault();
  let UserData = formData;
  if(profileImage){
    const data = new FormData();
    const fileName = Date.now() + profileImage.name;
    data.append("name",fileName);
    data.append("file",profileImage);
    UserData.profilePicture =fileName;
    try {
      dispatch(uploadImage(data));
    } catch (err) {
      console.log(err);
    }
  }
  if(coverImage){
    const data = new FormData();
    const fileName = Date.now() + coverImage.name;
    data.append("name",fileName);
    data.append("file",coverImage);
    UserData.coverPicture = fileName;
    try{
      dispatch(uploadImage(data));
    }catch(err){
      console.log(err);
    }
  }
  // console.log('paramid',param.id);
  // console.log('userdata',UserData);
  dispatch(updateUser(param.id, UserData));
  setOpen(false);
}

// console.log('formdata',formData.data.firstname);
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
       <UilPen width='2rem' height='1.2rem' onClick={handleClickOpen}/>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
       </BootstrapDialogTitle>
        <DialogContent >
        <form className='infoForm'>
               <h3>Your info</h3>
               <div>
                <TextField
                            id="outlined-textarea"
                            label="First-Name"
                            className="infoInput"
                            name="firstname"
                            color='warning'
                            onChange={handleChange}
                            value={formData.data.firstname}
                            multiline
                          />
                 {/* <input type="text" 
                 className='infoInput'
                 name='Livesin'
                 placeholder='Lives in'
                  /> */}
                   <TextField
                            id="outlined-textarea"
                            label="Last-Name"
                            className="infoInput"
                            name="lastname"
                            color='warning'
                            onChange={handleChange}
                            value={formData.data.lastname}
                            multiline
                          />
                  {/* <input type="text" 
                 className='infoInput'
                 name='Country'
                 placeholder='Country'
                  /> */}
                </div>
                <div>
                <TextField
                            id="outlined-textarea"
                            label="Livesin"
                            className="infoInput"
                            name="livesin"
                            color='warning'
                            onChange={handleChange}
                            value={formData.data.livesin}
                            multiline
                          />
                 {/* <input type="text" 
                 className='infoInput'
                 name='Livesin'
                 placeholder='Lives in'
                  /> */}
                   <TextField
                            id="outlined-textarea"
                            label="Country"
                            className="infoInput"
                            name="country"
                            color='warning'
                            onChange={handleChange}
                            value={formData.data.country}
                            multiline
                          />
                  {/* <input type="text" 
                 className='infoInput'
                 name='Country'
                 placeholder='Country'
                  /> */}
                </div>
                <div>
                <TextField
                            id="outlined-textarea"
                            label="Relationship"
                            className="infoInput"
                            name="relationship"
                            color='warning'
                            onChange={handleChange}
                            value={formData.data.relationship}
                            multiline
                          />
                {/* <input type="text" 
                 className='infoInput'
                 name='Relationship'
                 placeholder='Relationship'
                  /> */}
                </div>
                <div>
                <TextField
                            id="outlined-textarea"
                            label="Education"
                            className="infoInput"
                            name="education"
                            color='warning'
                            onChange={handleChange}
                            value={formData.data.education}
                            multiline
                          />
                {/* <input type="text" 
                 className='infoInput'
                 name='Education'
                 placeholder='Education'
                  /> */}
                  <TextField
                            id="outlined-textarea"
                            label="Works at"
                            className="infoInput"
                            name="worksAt"
                            color='warning'
                            onChange={handleChange}
                            value={formData.data.worksAt}
                            multiline
                          />
                  {/* <input type="text" 
                 className='infoInput'
                 name='Worksat'
                 placeholder='Works at'
                  /> */}
                </div>
                <div>
                  Profile Image
                  <input type="file" name='profileImage' onChange={onImageChange} />
                  Cover Image
                  <input type="file" name='coverImage' onChange={onImageChange}/>

                </div>
            </form>
        </DialogContent>
        <DialogActions>
          {/* <Button autoFocus onClick={handleClose}>
            Save changes
          </Button> */}
          <button className="button infoButton" style={{width:'8rem'}} onClick={handleSubmit}>Save Changes</button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}

// import {Modal,useMantineTheme} from '@mantine/core';
// function ProfileModal(modalOpened,setModalOpened){
//     const theme = useMantineTheme();
//     return(
//         <Modal
//         overlayColor={theme.colorScheme === 'dark'  ? theme.colors.dark[9]
//         : theme.colors.gray[2]}
//         overlayOpacity={0.55}
//         overlayBlur={3}
//         opened = {modalOpened}
//         onClose={()=>setModalOpened(false)}
//         >
//             <form className='infoForm'>
//                 <h3>Your info</h3>
//             </form>
//         </Modal>
//     )
// }

// export default ProfileModal


// import * as React from 'react';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import {UilPen} from '@iconscout/react-unicons'
// import { IconButton } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';


// function ProfileModal(modalOpened,setModalOpened){
//     const [open, setOpen] = React.useState(false);
//     // const onClose={handleClose}

//     const handleClickOpen = () => {
//       setOpen(true);
//     };
  
//     const handleClose = () => {
//       setOpen(false);
//     };
//         return(
//         <div>
//       {/* <Button variant="outlined" onClick={handleClickOpen}>
//         Open alert dialog
//       </Button> */}
//               <UilPen width='2rem' height='1.2rem' onClick={handleClickOpen}/>

//       <Dialog
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="alert-dialog-title"
//         aria-describedby="alert-dialog-description"
//       >
       
//         <DialogTitle id="alert-dialog-title">
//           {/* {"Use Google's location service?"} */}
//         </DialogTitle>
//         <DialogContent>
//           <DialogContentText id="alert-dialog-description">
//           <form className='infoForm'>
//                <h3>Your info</h3>
//                <div>
//                 <input type="text" 
//                 className='infoInput'
//                 name='FirstName'
//                 placeholder='First Name'
//                  />
//                  <input type="text" 
//                 className='infoInput'
//                 name='LastName'
//                 placeholder='Last Name'
//                  />
//                </div>
//            </form>
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           {/* <Button onClick={handleClose}>Disagree</Button>
//           <Button onClick={handleClose} autoFocus> */}
//             {/* Agree
//           </Button> */}
//         </DialogActions>
//       </Dialog>
//     </div>
//     )
// }

// export default ProfileModal