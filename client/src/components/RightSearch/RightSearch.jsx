import React from 'react'
import './RightSearch.css'
import {UilSearch} from '@iconscout/react-unicons'
import {AiOutlineLogout} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { TextField } from '@mui/material'
const RightSearch = () => {
  const navigate=useNavigate()

  return (
<div className="right">
<div className="Search">
  {/* <TextField id="filled-hidden-label-small" color='warning' label="Search"/> */}
    <input type="text" placeholder='Search'/>
    <div className="s-icon-r">
        <UilSearch/>
    </div>
    
</div>
<div className="Logout-r">
<AiOutlineLogout onClick={()=>{
            navigate('/')
}}/>
</div>
</div> 
 )
}

export default RightSearch