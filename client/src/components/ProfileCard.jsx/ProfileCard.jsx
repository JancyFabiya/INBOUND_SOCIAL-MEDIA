import React from 'react';
import Profile from '../../img/daneriyas.jpg'
import './ProfileCard.css'
import Card from 'react-bootstrap/Card';
import { BsPencilSquare } from "react-icons/bs";
import { useSelector } from 'react-redux';
import {Link, useNavigate} from 'react-router-dom'

const ProfileCard = () => {
    const {user} = useSelector((state)=>state.authReducer.authData)
    // console.log('234',user)
    const ProfilePage = false;
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
    const navigate=useNavigate()
  return (
   <div className="ProfileCard">
    <div  style={{backgroundColor:'white',width:'15rem',height:'90px'}} className="ProfileImages">
    <img src={user.profilePicture ? serverPublic + user.profilePicture : serverPublic + "defaultProfile.png"} alt=''/>
    {/* <img src={Profile} alt="" /> */}
        <div className="ProfileName1">
        <span>{user.firstname} {user.lastname}</span>
    </div>

        <div className="icon-hc">
        {ProfilePage ? "" :
            <Link style={{textDecoration: "none",color: "inherit"}} to ={`/profile/${user._id}`}><BsPencilSquare/></Link>
            // </BsPencilSquare>
            }

        {/* <BsPencilSquare onClick={()=>{
            navigate('/profile')
        }}>
            {/* <Link style={{textDecoration: "none",color: "inherit"}} to ='/profile'></Link> 
        </BsPencilSquare>*/}
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
