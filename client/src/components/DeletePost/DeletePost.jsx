import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost } from '../../api/PostRequest';
import { unFollowUser } from '../../actions/userAction';




const ITEM_HEIGHT = 48;

export default function DeletePost({data}) {
    const {user}  = useSelector((state) => state.authReducer.authData);
  const dispatch=useDispatch()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
   
  const handleDelete=()=>{
     console.log('ppp');
     console.log(user._id);
    deletePost(data._id,{userId:user._id})
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleFollow=()=>{
    console.log('unfollow');
    dispatch(unFollowUser(data.userId,{_id :user._id}))
  }

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
       
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {
       data.userId===user._id?
         <div>
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
        <MenuItem onClick={handleClose}>Cancel</MenuItem>
        </div>
        :
         <div>
        <MenuItem onClick={handleFollow}>Unfollow</MenuItem>
        <MenuItem onClick={handleClose}>Cancel</MenuItem>
        </div>
       }
       
      </Menu>
      
    </div>
  );
}