import React from 'react';
import LogoSearch from '../LogoSearch/LogoSearch';
import MenuCard from '../MenuCard/MenuCard';
import ProfileCard from '../ProfileCard.jsx/ProfileCard';
import './ProfileSide.css'
const ProfileSide = () => {
  return (
    <div className="ProfileSide">
    <LogoSearch/>
    <ProfileCard/>
    <MenuCard/>
     </div>
  );
}

export default ProfileSide;
