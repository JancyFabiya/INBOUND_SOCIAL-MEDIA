import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import InfoCard from "../../components/InfoCard/InfoCard";
import Posts from "../../components/Posts/Posts";
import ProfileCover from "../../components/ProfileCover/ProfileCover";
import ProfileNav from "../../components/ProfileNav/ProfileNav";
import "./Profile.css";
const Profile = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.authReducer.authData);
  const posts = useSelector((state) => state.postReducer.posts);
  return (
    <div className="Profile">
      <ProfileNav />
      <div className="cover">
        <ProfileCover />
      </div>
      <div className="left">
        <InfoCard />
      </div>
      <div className="menus">
        <div>
          <span>{posts.filter((post) => post.userId === user._id).length}</span>
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
        {/* <Link style={{textDecoration: "none",color: "inherit" }} to = '../home'>
    <span className='big-home'>Home</span>
    </Link> */}
      </div>
      <div className="post">
        <Posts />
      </div>
    </div>
  );
};

export default Profile;
