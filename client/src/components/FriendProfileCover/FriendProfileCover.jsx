import React from "react";
import Cover from "../../img/dreamcap.jpg";
import Profile from "../../img/daneriyas.jpg";
import "./FriendProfileCover.css";
import { BsPencilSquare } from "react-icons/bs";
import { useSelector } from "react-redux";
const FriendProfileCover = ({friend}) => {
  const {user} = useSelector((state)=>state.authReducer.authData)
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
// console.log('cover',friend);
  return (
    <div className="Profilecover">
      <div className="ProfileImage">
        <img src={friend.coverPicture ? serverPublic + friend.coverPicture : serverPublic + "defaultCover.jpg"} alt="" />
        {/* <div className="icon-cv">
          <BsPencilSquare />
        </div> */}
        <img src={friend.profilePicture ? serverPublic + friend.profilePicture : serverPublic + "defaultProfile.png"} alt="" />
        {/* <div className="icon-pc">
          <BsPencilSquare />
        </div> */}
      </div>
      <div className="Profilename">
        <span>{friend.firstname} {friend.lastname}</span>
        <span>{friend.following ?friend.following.length : '0'} Friends</span>
      </div>
    </div>
  );
};

export default FriendProfileCover;
