import { Avatar, Box, Paper } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { frndList } from "../../api/UserRequest";
import { followUser, unFollowUser } from "../../actions/userAction";
import FriendView from "../FriendView/FriendView";


const FriendList = () => {
  const { user } = useSelector((state) => state.authReducer.authData);
console.log('userFollow',user);
  // const [frndz,setFrndz] = useState(user.following)
  const [frndDetail, setFrndDetail] = useState([]);
  
  // if(frndz){
  //     console.log('fdz',frndz);
  // }
  useEffect(() => {
    // frndz.map(async (e)=>{
    const fetchFrndz = async () => {
      // console.log('lf',e);
      const { data } = await frndList(user._id);
      // console.log(data);
      setFrndDetail(data.following);
    };
    fetchFrndz();
  }, [frndDetail]);
  if (frndDetail) {
    console.log("listfrnd", frndDetail);
  }
  return (
    <div className="frndlist">
      {frndDetail.map((frn) => (
        <FriendView frn={frn}/>
        // {/* {frndDetail ? */}
        // (
        // <div className="fnoti">
      //     <Paper elevation={3} className='paper'>
      //     <div className="fnoti">
      //         <Avatar
      //           src={
      //             frn.profilePicture
      //               ? serverPublic + frn.profilePicture
      //               : serverPublic + "defaultProfile.png"
      //           }
      //           className="fImg"
      //         />
      //       <div className="fname">
      //         <span>{frn.firstname}</span>
      //       </div>
      //     </div>
      //     <div className="fbutn">
      //  <Box sx={{mx:10}}>
      //  <button
      //     className={
      //       following ? "button fc-button UnfollowButton" : "button fc-button"
      //     }
      //     onClick={handleFollow}
      //   >
      //     {following ? "Unfollow" : "Follow"}
      //   </button>
      //  </Box>
      //             </div>
      //     </Paper>
        // </div>
      ))}
    </div>
  );
};

export default FriendList;
