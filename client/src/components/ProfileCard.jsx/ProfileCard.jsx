import React from 'react';
import Profile from '../../img/daneriyas.jpg'
import './ProfileCard.css'
import Card from 'react-bootstrap/Card';
import { BsPencilSquare } from "react-icons/bs";
// import { useSelector } from 'react-redux';
import {Link, useNavigate} from 'react-router-dom'

const ProfileCard = () => {
    // const {user} = useSelector((state)=>state.authReducer.authData)
    // const ProfilePage = false;
    // const serverPublic
    const navigate=useNavigate()
  return (
   <div className="ProfileCard">
    <div  style={{backgroundColor:'white',width:'15rem',height:'90px'}} className="ProfileImages">
    <img src={Profile} alt=''/>
        <div className="ProfileName1">
        <span>Daenerys</span>
    </div>

        <div className="icon-hc">

        <BsPencilSquare onClick={()=>{
            navigate('/profile')
        }}>
            {/* <Link style={{textDecoration: "none",color: "inherit"}} to ='/profile'></Link> */}
        </BsPencilSquare>
        </div>
    {/* <img src={Profile} alt=''/> */}
    </div>
    
    {/* <span>
        My Profile
    </span> */}
   </div>
  );
}

export default ProfileCard;
