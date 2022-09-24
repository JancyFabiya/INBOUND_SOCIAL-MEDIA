import React, { useEffect, useState } from 'react'
import './Notification.css'
import { Followers} from '../../Data/NotificationData'
import User from '../User/User'
import { getAllUsers } from '../../api/UserRequest'
import {useSelector} from 'react-redux';
const Notification = () => {
    const [persons,setPersons] = useState([]);
    const {user}  = useSelector((state) => state.authReducer.authData);
// console.log('ffff',user);
// const foll = user.following
// const v = persons.filter(e=> !foll.includes(e))
    useEffect(()=>{
        const fetchPersons = async()=>{
            const {data} = await getAllUsers(user._id);
            console.log('111',data);
            setPersons(data)
        }
        fetchPersons()
    
        
    },[])
    // console.log(foll,"============")
  
  return (
<div className="Notification">
<h3>People you may know</h3>
{persons.map((person,id)=>{
    if(person._id !== user._id)
  {
    
     return(
      <User person={person} key = {id} />
    )  
   

   
  }
})}
{/* {persons.filter((person,id)=>{
  if((!foll.includes(person._id)) && (person._id !== user._id)){
    return(
      <User person = {person} key={id} />
    )
  }
})} */}
</div>  
)
}

export default Notification