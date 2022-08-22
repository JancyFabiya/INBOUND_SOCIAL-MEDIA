import React from 'react';
import story from '../../img/ss.jpg'
import './Story.css'

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';
import { BsPlusLg } from 'react-icons/bs';

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
const Story = () => {
  return (
    <div className="PostShare">
           <Card sx={{ minWidth: 120 }}>
      {/* <CardContent>
               <img src={story} alt="" />
       
      </CardContent> */}
      {/* <CardMedia
        component="img"
        height="150"
        
        // image='' alt="" 
      /> */}
      <div className="plus">
      <BsPlusLg/>
      </div>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
         <Card sx={{ minWidth: 120 }}>
      {/* <CardContent>
               <img src={story} alt="" />
       
      </CardContent> */}
      <CardMedia
        component="img"
        height="150"
        image={story} alt="" 
      />
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
    <Card sx={{ minWidth: 120 }}>
      {/* <CardContent>
               <img src={story} alt="" />
       
      </CardContent> */}
      <CardMedia
        component="img"
        height="150"
        image={story} alt="" 
      />
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
    <Card sx={{ minWidth: 120 }}>
      {/* <CardContent>
               <img src={story} alt="" />
       
      </CardContent> */}
      <CardMedia
        component="img"
        height="150"
        image={story} alt="" 
      />
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
    <Card sx={{ minWidth: 120 }}>
      {/* <CardContent>
               <img src={story} alt="" />
       
      </CardContent> */}
      <CardMedia
        component="img"
        height="150"
        image={story} alt="" 
      />
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
    </div>
  );
}

export default Story;
