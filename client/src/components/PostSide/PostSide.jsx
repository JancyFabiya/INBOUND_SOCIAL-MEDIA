import React from 'react';
import Posts from '../Posts/Posts';
import Story from '../Story/Story';
import './PostSide.css'
const PostSide = () => {
  return (
    <div className="PostSide">
        <Story/>
        <Posts/>
    </div>
  );
}

export default PostSide;
