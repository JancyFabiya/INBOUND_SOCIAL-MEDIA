import React from 'react'
import './Notification.css'
import { Followers} from '../../Data/NotificationData'
const Notification = () => {
  return (
<div className="Notification">
<h3>Notifications</h3>
{Followers.map((follower,id)=>{
    return(
        <div className="notification">
            <div>
                <img src={follower.img} alt=""className='followerImg' />
                <div className="name">
                    <span>{follower.name}</span>
                    <span>@{follower.username}</span>
                </div>
            </div>
            <div className="butdiv">
            <button className='button fc-button'>Accept</button>
            <button className='button-dec'>Decline</button>
            </div>
        </div>
    )
})}
</div>  
)
}

export default Notification