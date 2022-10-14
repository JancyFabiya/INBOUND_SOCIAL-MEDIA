import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import FriendList from "../../components/FriendList/FriendList";
import InfoCard from "../../components/InfoCard/InfoCard";
import Posts from "../../components/Posts/Posts";
import ProfileCover from "../../components/ProfileCover/ProfileCover";
import ProfileNav from "../../components/ProfileNav/ProfileNav";
import "./Profile.css";
const Profile = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.authReducer.authData);
  const posts = useSelector((state) => state.postReducer.posts);
  const [frnd,setFrnd] =useState(false)
  const [post,setPost] = useState(true)
  return (
    <div className="Profile">
      <ProfileNav />
      <div className="cover">
        <ProfileCover/>
        {/* <ProfileCover location = 'profilePage'/> */}

      </div>
      <div className="left">
        <InfoCard />
      </div>
      <div className="menus">
        <div>
          <span>{posts.filter((post) => post.userId === user._id).length}</span>
          <span
          onClick={()=>{
            setPost(true)
          setFrnd(false)

            }}>Post</span>
        </div>
        <span
        onClick={()=>{
          setFrnd(true)
          setPost(false)

          }}>Friends</span>
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
      <div className="post">
      {frnd === true ? (
      <div className="notiF"><FriendList/></div>) : " "}

       {post === true ? <Posts /> : " "}

      </div>
    </div>
  );
};

export default Profile;
