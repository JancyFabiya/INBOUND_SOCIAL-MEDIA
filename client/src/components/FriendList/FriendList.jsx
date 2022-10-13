import { Avatar, Paper } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { frndList } from '../../api/UserRequest';

const FriendList = () => {
    const { user } = useSelector((state) => state.authReducer.authData);
    // const [frndz,setFrndz] = useState(user.following)
    const [frndDetail,setFrndDetail] = useState([])
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;


    // if(frndz){
    //     console.log('fdz',frndz);
    // }
    useEffect(()=>{
        // frndz.map(async (e)=>{
          const fetchFrndz = async()=>{
            // console.log('lf',e);
            const { data } = await frndList(user._id);
            // console.log(data);
            setFrndDetail(data.following)

        }
        fetchFrndz()
    },[])
    if(frndDetail){
        console.log('listfrnd',frndDetail);
    }
  return (
    <div className='frndlist'>
        {frndDetail.map((frn)=>(
        // {/* {frndDetail ? */}
        // (
      <Paper elevation={3} className='paper'>
        <div className='fimg'>
           <Avatar
            src={
              frn.profilePicture
                  ? serverPublic + frn.profilePicture
                  : serverPublic + "defaultProfile.png"
              }/>
 
        </div>
        <div className='fname'>
           <span>{frn.firstname}</span>
 
        </div>
        <div className='fbutn'>
      <button>Unfollow</button>

        </div>
      </Paper>
       ))  
 }  

    </div>
  );
}

export default FriendList;
