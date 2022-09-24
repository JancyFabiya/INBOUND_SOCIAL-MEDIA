import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
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

  const [friend,setFriend] = useState([])
    const dispatch = useDispatch();
let id = useParams();
console.log(id.id);

useEffect(() => {
  console.log('oooo');

const getFriend = async () =>{
  try {
    const {data} = await friendPerson(id.id)
    setFriend(data)
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
 getFriend()
}, []);


  return (
    <div className='profile1'>
      <ProfileNav/>
      <div className='cover1'>
        <FriendProfileCover friend={friend}/>
      </div>
      <div className='left1'>
        <FriendInfo friend={friend}/>
      </div>
      <div className="menus1">
        <div>
           {/* <span>{posts.filter((post) => post.userId === user._id).length}</span>  */}
          <span>Post</span>
        </div>
        <span>Friends</span>
        <span
          className="bighome"
          onClick={() => {
            navigate("../home");
          }}
        >
          {" "}
          Home
        </span>
      
      </div>
      <div className='post1'>
        <Posts/>
      </div>
    </div>
  );
}

export default FriendProfile;
