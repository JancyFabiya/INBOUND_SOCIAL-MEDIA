import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const LiveUser = ({person}) => {
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="liveUser">
         <img
          src={
            person.profilePicture
              ? serverPublic + person.profilePicture
              : serverPublic + "defaultProfile.png"
          }
          alt=""
          className="followerImg"
        />
    </div>
  );
}

export default LiveUser;
