import React from 'react'
import './RightSide.css'
// import {UilSearch} from '@iconscout/react-unicons'
// import {AiOutlineLogout} from 'react-icons/ai'
import Notification from '../Notification/Notification'
import RightSearch from '../RightSearch/RightSearch'
const RightSide = () => {
  return (
    <div className="Rightside">
        {/* <div className="Search">
    <input type="text" placeholder='Search'/>
    <div className="s-icon">
        <UilSearch/>
    </div>
    
</div>
<div className="Logout">
<AiOutlineLogout/>
</div> */}
<RightSearch/>
<Notification/>
    </div>
  )
}

export default RightSide