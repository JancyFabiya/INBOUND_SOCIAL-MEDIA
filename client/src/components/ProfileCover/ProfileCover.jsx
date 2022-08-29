import React from "react";
import Cover from "../../img/dreamcap.jpg";
import Profile from "../../img/daneriyas.jpg";
import "./ProfileCover.css";
import { BsPencilSquare } from "react-icons/bs";
import { useSelector } from "react-redux";
const ProfileCover = () => {
  const {user} = useSelector((state)=>state.authReducer.authData)
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="Profilecover">
      <div className="ProfileImage">
        <img src={user.coverPicture ? serverPublic + user.coverPicture : serverPublic + "defaultCover.jpg"} alt="" />
        {/* <div className="icon-cv">
          <BsPencilSquare />
        </div> */}
        <img src={user.profilePicture ? serverPublic + user.profilePicture : serverPublic + "defaultProfile.png"} alt="" />
        {/* <div className="icon-pc">
          <BsPencilSquare />
        </div> */}
      </div>
      <div className="ProfileName-c">
        <span>{user.firstname} {user.lastname}</span>
        <span>{user.following.length} Friends</span>
      </div>
    </div>
  );
};

export default ProfileCover;
