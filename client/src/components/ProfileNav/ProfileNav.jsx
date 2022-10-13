import React from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { useDispatch } from "react-redux";
import InfoCard from "../InfoCard/InfoCard";
import LogoSearch from "../LogoSearch/LogoSearch";
import RightSearch from "../RightSearch/RightSearch";
import "./ProfileNav.css";
import { logOut } from '../../actions/AuthAction'




const ProfileNav = () => {
  const dispatch = useDispatch()

  const handleLogOut = () => {
    // localStorage.removeItem('profile')
    // localStorage.removeItem('store.authReducer')
    dispatch(logOut())
}
  return (
    <div className="ProfileLeft">
      <div className="logo">
      <LogoSearch />
      {/* <InfoCard/> */}
      </div>
      <div className="search">
      {/* <RightSearch/> */}
      <div className="Logout-r">
{/* <AiOutlineLogout onClick={()=>{
            navigate('/')
}}/> */}
<AiOutlineLogout onClick={handleLogOut}/>
</div>

      </div>

    </div>
  );
};

export default ProfileNav;
