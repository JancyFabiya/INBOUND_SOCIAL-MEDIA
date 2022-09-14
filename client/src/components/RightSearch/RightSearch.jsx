import React from 'react'
import './RightSearch.css'
import {UilSearch} from '@iconscout/react-unicons'
import {AiOutlineLogout} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { TextField } from '@mui/material'
import { logOut } from '../../actions/AuthAction'
import { useDispatch } from 'react-redux'

const RightSearch = () => {
  const navigate=useNavigate()
  const dispatch = useDispatch()

  const handleLogOut = () => {
    // localStorage.removeItem('profile')
    // localStorage.removeItem('store.authReducer')
    dispatch(logOut())
}

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
{/* <AiOutlineLogout onClick={()=>{
            navigate('/')
}}/> */}
<AiOutlineLogout onClick={handleLogOut}/>
</div>
</div> 
 )
}

export default RightSearch