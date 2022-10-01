import React, { useState } from 'react';
import './MenuCard.css'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import AddPostModal from '../AddPostModal/AddPostModal.jsx'
import { BsFillBookmarkDashFill, BsFillGearFill, BsFillHouseFill, BsSignal } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';

const MenuCard = () => {
  const [modalOpened , setModalOpened] = useState(false)
  const navigate = useNavigate();
  return (
    <div className="MenuCard">
        <h3>Menu</h3>
        <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 240,
          height: 160,
        },
      }}
    >
      <Paper elevation={0}>
        <div className='menu'>
        <BsFillHouseFill/> 
        </div>
        
          <Link style={{textDecoration: "none",color: "inherit"}} to="../home">
          <div className="Menuspan">
        <span>Home</span>
        </div>
        </Link>

        <hr/>
        <div className='menu'>
        <BsSignal/> 
        </div>
        <div className="Menuspan">
        <span
        onClick={()=>{
          navigate("/chat")
        }}>Message</span>
        </div>
        <hr/>
        <div className='menu'>
        <BsFillBookmarkDashFill/> 
        </div>
        <div className="Menuspan">
        {/* <span>Add Post</span> */}
        <AddPostModal
        modalOpened={modalOpened}
        setModalOpend={setModalOpened}
        />
        </div>
        {/* <hr/>
        <div className='menu'>
        <BsFillGearFill/> 
        </div>
        <div className="Menuspan">
        <span>Settings</span>
        </div> */}
        
        </Paper> 
      
      {/* <Paper />
      <Paper elevation={3} /> */}
    </Box>
    </div>
  );
}

export default MenuCard;
