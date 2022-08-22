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

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

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
                            label="Livesin"
                            className="infoInput"
                            name="livesin"
                            color='warning'
                            // onChange={handleChange}
                            // value={data.lastname}
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
                            // onChange={handleChange}
                            // value={data.lastname}
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
                            // onChange={handleChange}
                            // value={data.lastname}
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
                            // onChange={handleChange}
                            // value={data.lastname}
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
                            name="worksat"
                            color='warning'
                            // onChange={handleChange}
                            // value={data.lastname}
                            multiline
                          />
                  {/* <input type="text" 
                 className='infoInput'
                 name='Worksat'
                 placeholder='Works at'
                  /> */}
                </div>
            </form>
        </DialogContent>
        <DialogActions>
          {/* <Button autoFocus onClick={handleClose}>
            Save changes
          </Button> */}
          <button className="button infoButton" style={{width:'8rem'}}>Save Changes</button>
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