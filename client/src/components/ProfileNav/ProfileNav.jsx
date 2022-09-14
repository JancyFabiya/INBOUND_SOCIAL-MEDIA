import React from "react";
import InfoCard from "../InfoCard/InfoCard";
import LogoSearch from "../LogoSearch/LogoSearch";
import RightSearch from "../RightSearch/RightSearch";
import "./ProfileNav.css";



const ProfileNav = () => {
  return (
    <div className="ProfileLeft">
      <div className="logo">
      <LogoSearch />
      {/* <InfoCard/> */}
      </div>
      <div className="search">
      <RightSearch/>

      </div>

    </div>
  );
};

export default ProfileNav;
