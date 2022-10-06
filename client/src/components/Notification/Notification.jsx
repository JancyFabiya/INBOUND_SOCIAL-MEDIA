import React, { useEffect, useState } from 'react'
import './Notification.css'
import { Followers} from '../../Data/NotificationData'
import User from '../User/User'
import { getAllUsers, searchUser } from '../../api/UserRequest'
import {useSelector} from 'react-redux';
import SearchUser from '../SearchUser/SearchUser'
const Notification = ({svalue}) => {
  // console.log('111',srch.length);
  console.log('222',svalue.data);
    const [persons,setPersons] = useState([]);
    const {user}  = useSelector((state) => state.authReducer.authData);
// console.log('ffff',user);
// const foll = user.following
// const v = persons.filter(e=> !foll.includes(e))
    useEffect(()=>{
        const fetchPersons = async()=>{
            const {data} = await getAllUsers(user._id);
            // console.log('111',data);
            setPersons(data)
        }
        fetchPersons()
    
        
    },[])

    // useEffect(()=>{
    //   const serchPerson = async()=>{
    //     const sr = await searchUser(srch)
    //     console.log('serarch',sr);
    //   }
    //   serchPerson()
    // },[])
    // console.log(foll,"============")
  
  return (
<div className="Notification">
<h3>People you may know</h3>
{
(svalue.length != 0) ? 
<SearchUser Suser={svalue.data}/>
// svalue != '' ? 'null'
:
persons.map((person,id)=>{
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