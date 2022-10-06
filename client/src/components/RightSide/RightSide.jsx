import React, { useRef, useState } from 'react'
import './RightSide.css'
import {UilSearch} from '@iconscout/react-unicons'
import {AiOutlineLogout} from 'react-icons/ai'
import Notification from '../Notification/Notification'
import RightSearch from '../RightSearch/RightSearch'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logOut } from '../../actions/AuthAction'
import { searchUser } from '../../api/UserRequest'
const RightSide = () => {
  // const search = useRef();
  const navigate=useNavigate()
  const dispatch = useDispatch()
  const [srch,setSrch] = useState({firstname: ""});
  const [svalue,setSvalue] =   useState('')
// console.log('888',firstname);
  const handleLogOut = () => {
    // localStorage.removeItem('profile')
    // localStorage.removeItem('store.authReducer')
    dispatch(logOut())
}
const searchChange = (e) => {
  setSrch({firstname:e.target.value})
}
// const handleSearch = (e) => {
//   e.preventDefault();
//   // firstname:search.current.value
//   setSrch(e.target.value)
// }
console.log('aaa',srch);
const handleSearch = async (e) => {
  e.preventDefault();
  console.log('Svalue',srch);
  await searchUser(srch).then(res=>{
    console.log('serchresult',res);
  setSvalue(res)

  }).catch(err=>console.log(err))

}
console.log('nottti',svalue.data);

  return (
    <div className="Rightside">
      {/* <form action=""onClick={handleSearch}> */}
        <div className="Search">
    <input   type="text" placeholder='Search'name='firstname' onChange={searchChange} />
    <div className="s-icon">
        <UilSearch onClick={handleSearch}/>
    </div>
    
</div>
{/* </form> */}
<div className="Logout-r">
<AiOutlineLogout onClick={handleLogOut}/>
</div>
{/* <RightSearch/> */}
<Notification svalue={svalue}/>
    </div>
  )
}

export default RightSide