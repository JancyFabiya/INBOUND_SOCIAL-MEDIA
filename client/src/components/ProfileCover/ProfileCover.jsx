import React from "react";
import Cover from "../../img/dreamcap.jpg";
import Profile from "../../img/daneriyas.jpg";
import "./ProfileCover.css";
import { BsPencilSquare } from "react-icons/bs";
const ProfileCover = () => {
  return (
    <div className="Profilecover">
      <div className="ProfileImage">
        <img src={Cover} alt="" />
        <div className="icon-cv">
          <BsPencilSquare />
        </div>
        <img src={Profile} alt="" />
        <div className="icon-pc">
          <BsPencilSquare />
        </div>
      </div>
      <div className="ProfileName-c">
        <span>Daenerys</span>
        <span>195 Friends</span>
      </div>
    </div>
  );
};

export default ProfileCover;
