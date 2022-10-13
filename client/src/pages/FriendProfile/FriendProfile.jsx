import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { createChat } from '../../api/ChatRequest';
import { friendPerson } from '../../api/UserRequest';
import FriendInfo from '../../components/FriendInfo/FriendInfo';
import FriendProfileCover from '../../components/FriendProfileCover/FriendProfileCover';
import InfoCard from '../../components/InfoCard/InfoCard';
import Posts from '../../components/Posts/Posts';
import ProfileCover from '../../components/ProfileCover/ProfileCover';
import ProfileNav from '../../components/ProfileNav/ProfileNav';
import User from '../../components/User/User';
import "./FriendProfile.css";

const FriendProfile = () => {
  const navigate = useNavigate();
  const posts = useSelector((state) => state.postReducer.posts);
  console.log('friendPost',posts);
  const {user} = useSelector((state)=> state.authReducer.authData)
  const dispatch = useDispatch();

  const [friend,setFriend] = useState([])
    // const dispatch = useDispatch();
let id = useParams();
console.log('iddd',id.id);

useEffect(() => {
  console.log('oooo');

const getFriend = async () =>{
  try {
    const {data} = await friendPerson(id.id)
    setFriend(data)
    console.log('grtfrnd',data);
  } catch (error) {
    console.log(error);
  }
}
 getFriend()
}, []);

const message = () => {
// e.preventDefault();
const newChat={
  senderId:user._id,
  receiverId:id.id
  // members: [user._d,id.id]
}
 dispatch(createChat(newChat)) 
//  navigate("/chat")

}


  return (
    <div className='profile1'>
      <ProfileNav/>
      <div className='cover1'>
        <ProfileCover friend={friend}/>
        <Link style={{textDecoration: "none",color: "orange"}} to="/chat" className='chat'>
        <span onClick={() => {
          message()
        }}>Message</span>
        </Link>
      </div>
      <div className='left1'>
        <InfoCard friend={friend}/>
      </div>
      <div className="menus1">
        <div>
           <span>{posts.filter((post) => post.userId === id.id).length}</span> 
          <span>Post</span>
        </div>
        <span>Friends</span>
        <span
          className="big-home"
          onClick={() => {
            navigate("../home");
          }}
        >
          {" "}
          Home
        </span>
      
      </div>
      <div className='post'>
        <Posts friend={false}/>
      </div>
    </div>
  );
}

export default FriendProfile;
