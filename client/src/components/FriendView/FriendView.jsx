import { Avatar, Box, Paper } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { followUser, unFollowUser } from "../../actions/userAction";

const FriendView = ({frn}) => {
  const { user } = useSelector((state) => state.authReducer.authData);
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  const dispatch = useDispatch();

  const [following, setFollowing] = useState(
    user.following
  );
  // console.log('uiii',person);
  const handleFollow = (id) => {
    following
      ? dispatch(unFollowUser(frn._id, user))
      : dispatch(followUser(frn._id, user));

    setFollowing((prev) => !prev);
  };
  return (
    <>
      <Paper elevation={3} className='paper'>
          <div className="fnoti">
              <Avatar
                src={
                  frn.profilePicture
                    ? serverPublic + frn.profilePicture
                    : serverPublic + "defaultProfile.png"
                }
                className="fImg"
              />
            <div className="fname">
              <span>{frn.firstname}</span>
            </div>
          </div>
          <div className="fbutn">
       <Box sx={{mx:10}}>
       <button
          className={
            following ? "button fc-button UnfollowButton" : "button fc-button"
          }
          onClick={handleFollow}
        >
          {following ? "Unfollow" : "Follow"}
        </button>
       </Box>
                  </div>
          </Paper>
    </>
  );
}

export default FriendView;
