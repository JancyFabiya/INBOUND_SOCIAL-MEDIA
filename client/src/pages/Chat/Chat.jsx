import React, { useState } from 'react'
import './Chat.css'
import PostSide from '../../components/PostSide/PostSide'
import ProfileSide from '../../components/profileSide/ProfileSide'
import RightSide from '../../components/RightSide/RightSide'
import Message from '../../components/Message/Message'
import { useSelector } from 'react-redux'

const Chat = () => {
  const {user} = useSelector((state)=>state.authReducer.authData);
  console.log('user',user);
  const [chats,setChats] = useState([])
  
  return (
<div className="Chat">
<ProfileSide/>
<div className="Chat-container">
<Message/>
</div>
<RightSide/>
</div>  
)
}

export default Chat