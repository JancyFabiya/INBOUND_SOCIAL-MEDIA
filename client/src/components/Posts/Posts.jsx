import React, { useEffect } from 'react';
import './Posts.css';
import { PostsData } from '../../Data/PostsData';
import Post from '../Post/Post';
import {useDispatch, useSelector} from 'react-redux'
import { getTimelinePosts } from '../../actions/postAction'
import {useParams} from 'react-router-dom'
import { Box, Paper } from '@mui/material';
const Posts = () => {

  const dispatch = useDispatch()
  const {user} = useSelector((state)=> state.authReducer.authData)
  let {posts,loading} = useSelector((state)=>state.postReducer)
  const params = useParams()

  useEffect(()=>{
    dispatch(getTimelinePosts(user._id))
  },[])

  if(!posts) return "no posts";
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
                  // marginBottom:-42,
                  // gap: 1,
                  width : 860,
                  height : 460,
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
