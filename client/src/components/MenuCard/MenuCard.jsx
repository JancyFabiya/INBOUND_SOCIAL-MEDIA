import React from 'react';
import './MenuCard.css'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { BsFillBookmarkDashFill, BsFillGearFill, BsFillHouseFill, BsSignal } from 'react-icons/bs';
const MenuCard = () => {
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
          height: 240,
        },
      }}
    >
      <Paper elevation={0}>
        <div className='menu'>
        <BsFillHouseFill/> 
        </div>
        <div className="Menuspan">
        <span>Home</span>
        </div>
        <hr/>
        <div className='menu'>
        <BsSignal/> 
        </div>
        <div className="Menuspan">
        <span>Message</span>
        </div>
        <hr/>
        <div className='menu'>
        <BsFillBookmarkDashFill/> 
        </div>
        <div className="Menuspan">
        <span>Add Post</span>
        </div>
        <hr/>
        <div className='menu'>
        <BsFillGearFill/> 
        </div>
        <div className="Menuspan">
        <span>Settings</span>
        </div>
        
        </Paper> 
      
      {/* <Paper />
      <Paper elevation={3} /> */}
    </Box>
    </div>
  );
}

export default MenuCard;
