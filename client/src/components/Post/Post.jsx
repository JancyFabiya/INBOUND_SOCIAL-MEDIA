import React, { useState } from 'react'
import './Post.css'
import Comment from '../../img/comment.png'
import share from '../../img/share.png'
import Heart from '../../img/like.png'
import NotLike from '../../img/notlike.png'
import { useSelector } from 'react-redux'
import { likePost } from '../../api/PostRequest'
import CommandModal from '../CommandModal/CommandModal'
import { useEffect } from 'react'
import { getCmnd } from '../../api/CommandRequest'

const Post = ({data}) => {
    const {user} = useSelector((state)=>state.authReducer.authData)
    const [liked, setLiked] = useState(data.likes.includes(user._id))
    const[likes,setLikes] = useState(data.likes.length)
    // const [command, setCommand] = useState([]);


    const handleLike = () =>{
        setLiked((prev)=>!prev)
        likePost(data._id,user._id)
        liked ? setLikes((prev)=>prev -1) : setLikes((prev)=>prev+1)
    }


//     useEffect(()=>{
//         const fetchCmnd = async()=>{
//             const cmd = await getCmnd(data._id);
//             // console.log('command',data);
//             setCommand(cmd.data)
//         }
//         fetchCmnd()
//       },[])
//   console.log('valuuuee',command);


  return (
<div className="Post">
    <img src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : " "} alt="" />
    <div className="postReact">
        <img src={liked?Heart: NotLike} alt="" style={{cursor:"pointer"}} onClick={handleLike}/>
        {/* <img src={Comment} alt="" /> */}

        <CommandModal id={data._id} />
        {/* <img src={share} alt="" /> */}
    </div>
    <span style={{color: "var(--gray)", fontSize: '12px'}}>{likes} likes</span>
    {/* <span>Comments</span> */}
    {/* <span>{command?command.text: ''}</span> */}

    <div className="detail">
        <span><b>{data.name}</b></span>
        <span> {data.desc}</span>
    </div>
</div>  )
}

export default Post