import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { followUser, unFollowUser } from "../../actions/userAction";
import FriendProfile from "../../pages/FriendProfile/FriendProfile";

const User = ({props, person }) => {
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  console.log('u222',user);
  const [following,setFollowing] = useState(person.followers.includes(user._id))
  console.log('uiii',person);
  const handleFollow = (id) => {
    following ?
    dispatch(unFollowUser(person._id, user)) :
    dispatch(followUser(person._id,user))

    setFollowing((prev)=>!prev)
  };

  return (
    <div className="notification">
      <div>
                  <Link  style={{textDecoration: "none",color: "inherit"}} to={`/friendProfile/${person._id}`}>
                  {/* <Link to={<FriendProfile/>}> */}
{/* <button onClick={()=>props.clickHandle(`${person._id}`)}> */}
        <img
          src={
            person.profilePicture
              ? serverPublic + person.profilePicture
              : serverPublic + "defaultProfile.png"
          }
          alt=""
          className="followerImg"
        />
                  </Link>
{/* </button> */}
        <div className="name">
          <span>{person.firstname}</span>
          {/* <span>{person.username}</span> */}
        </div>
      </div>
      <div className="butdiv">
        <button className={following ? "button fc-button UnfollowButton": "button fc-button"} onClick={handleFollow}>
          {following ? "Unfollow" : "Follow"}
        </button>
        {/* <button className="button-dec">Decline</button> */}
      </div>
    </div>
  );
};

export default User;
