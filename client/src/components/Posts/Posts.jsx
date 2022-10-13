import React, { useEffect } from 'react';
import './Posts.css';
import { PostsData } from '../../Data/PostsData';
import Post from '../Post/Post';
import {useDispatch, useSelector} from 'react-redux'
import { getTimelinePosts } from '../../actions/postAction'
import {useParams} from 'react-router-dom'
import { Box, Paper } from '@mui/material';
const Posts = ({friend}) => {
// console.log('postfrnd',friend);
  const dispatch = useDispatch()
  const {user} = useSelector((state)=> state.authReducer.authData)
  // console.log('post...user',user.following);
  let {posts,loading} = useSelector((state)=>state.postReducer)
  // console.log('compost',posts);
  const params = useParams()
  // console.log('postuserrr',params);

  useEffect(()=>{
    dispatch(getTimelinePosts(user._id))
  },[])
if(friend == false) return <h4 className='fpost'>Only view follow users</h4>
  if(!posts) return <h4>no posts</h4>
  if(params.id) posts = posts.filter((post)=>post.userId === params.id)
  return (
   
    <div className="Posts">
        {loading
        ? "Fetching Posts..."
         : posts.map((post,id)=>{
            return (
              <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                  // marginTop:2,
                  // gap: 1,
                  width : 860,
                  height : 520,
                  // minwidth: 860,
                  // minheight: 460,
                  // maxWidth : 860,
                  // maxHeight :660
                },
              }}
            >
              <Paper elevation={0}>
                <Post data={post} id={id}/>
              </Paper>
    </Box>
            )
        })}
    </div>
   
  );
}

export default Posts;
