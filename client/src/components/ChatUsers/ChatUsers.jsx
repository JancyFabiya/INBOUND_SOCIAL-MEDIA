import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { followUser, unFollowUser } from "../../actions/userAction";
import { getUser } from "../../api/UserRequest";

const ChatUsers = ({ data, currentUserId,online }) => {
  // const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  // const dispatch = useDispatch();
  // const { user } = useSelector((state) => state.authReducer.authData);
  // const [following, setFollowing] = useState(
  //   person.followers.includes(user._id)
  // );
  // const handleFollow = () => {
  //   following
  //     ? dispatch(unFollowUser(person._id, user))
  //     : dispatch(followUser(person._id, user));

  //   setFollowing((prev) => !prev);
  // };
  // console.log("chatuser");
  // console.log({ data }, currentUserId);

  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const userId = data.members.find((id) => id !== currentUserId);
    // console.log(userId);
    // console.log("dep");
    const getUserData = async () => {
      try {
        const { data } = await getUser(userId);
        setUserData(data);
        // console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getUserData();
  }, []);

  return (
    <>
      <div className="follower conversation">
        <div>
          {online && <div
            className="online-dot"
            style={{
              borderRadius: "50px",
              backgroundColor: "greenyellow",
              width: "10px",
              height: "10px",
              marginLeft: "35px",
            }}
          ></div>}
          <img
            src={
              userData?.profilePicture
                ? process.env.REACT_APP_PUBLIC_FOLDER + userData.profilePicture
                : process.env.REACT_APP_PUBLIC_FOLDER + "defaultProfile.png"
            }
            alt=""
            className="followerImage"
            style={{ width: "50px", height: "50px", borderRadius: "50px" }}
          />

          <div
            className="name"
            style={{
              fontSize: "0.8rem",
              marginTop: "-40px",
              marginLeft: "68px",
            }}
          >
            <span>
              {userData?.firstname} {userData?.lastname}
            </span>
            <span>{online? "Online" : "Offline"}</span>
          </div>
        </div>
        <div className="butdiv">
          {/* <button
          className={
            following ? "button fc-button UnfollowButton" : "button fc-button"
          }
          onClick={handleFollow}
        >
          {following ? "Unfollow" : "Follow"}
        </button> */}
          {/* <button className="button-dec">Decline</button> */}
        </div>
      </div>
      {/* <hr style={{ border: "0.1px solid " }} /> */}
    </>
  );
};

export default ChatUsers;
