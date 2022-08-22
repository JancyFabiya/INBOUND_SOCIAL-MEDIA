import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import './Login.css'
const Login = () => {
  return (
    <Box
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      '& > :not(style)': {
        m: 1,
        width: 460,
        height: 430,
        
    },
    }}
  >
   
    <Paper elevation={3}>
        
    <div className="a-right">
    <form className="infoForm">
        <h3>Log in</h3>
        {/* <div>
            <input type="text" placeholder='First Name'
            className='infoInput' name='firstname' />
                     <input type="text" placeholder='Last Name'
            className='infoInput' name='lastname' />
        </div> */}
        <div>
            <input type="text" className='infoInput' name='username'
            placeholder='Username' />
        </div>
        <div>
            <input type="text" className="infoInput" name='password'
            placeholder='Password'/>
                     {/* <input type="text" className="infoInput" name='conformpassword'
            placeholder='conform Password'/> */}
        </div>
        <div>
            <span style={{cursor:"pointer"}} >
                Don't have an account. Sign up!</span>
        </div>
        <button className="button infoButton" type='submit'>Login</button>
    </form>
</div>
        
    </Paper>
    
  </Box>
  );
}

export default Login;
