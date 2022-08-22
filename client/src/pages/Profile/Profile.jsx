import React from 'react'
import { useNavigate } from 'react-router-dom'
import InfoCard from '../../components/InfoCard/InfoCard'
import Posts from '../../components/Posts/Posts'
import ProfileCover from '../../components/ProfileCover/ProfileCover'
import ProfileNav from '../../components/ProfileNav/ProfileNav'
import './Profile.css'
const Profile = () => {
    const navigate=useNavigate()

  return (
<div className="Profile">
    <ProfileNav/>
    <div className="cover">
    <ProfileCover/>
    </div>
    <div className="left">
    <InfoCard/>
    </div>
    <div className="menus">
            <span>Post</span>
            <span>Friends</span>
            <span className='big-home'
            onClick={()=>{
                navigate('/')
    }}
    > Home</span>
        </div>
    <div className="post">
        
        <Posts/>
    </div>
</div> 
 )
}

export default Profile