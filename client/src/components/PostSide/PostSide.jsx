import React from 'react';
import Posts from '../Posts/Posts';
import Story from '../Story/Story';
import './PostSide.css'
import HorizontalScroll from 'react-scroll-horizontal'

const PostSide = () => {
  return (
    <div className="PostSide">
       <HorizontalScroll>
          <div className='main bg' >
        <Story/>
        </div>
    </HorizontalScroll>
    <div className="posts">
      <Posts/>
    </div>
        
    </div>
  );
}

export default PostSide;
