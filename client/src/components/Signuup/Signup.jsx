import React, { useState } from 'react'
import './Signup.css'
// import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { fontSize } from '@mui/system';
const Signup = () => {
    // const [isSignUp,setIsSignUp]=useState(false)

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
        <h3>Sign up</h3>
        <div>
                   <input type="text" placeholder='First Name'
            className='infoInput' name='firstname' />
                     <input type="text" placeholder='Last Name'
            className='infoInput' name='lastname' />
        </div>
        <div>
            <input type="text" className='infoInput' name='username'
            placeholder='Username' />
        </div>
        <div>
            <input type="text" className="infoInput" name='password'
            placeholder='Password'/>
                     <input type="text" className="infoInput" name='conformpassword'
            placeholder='conform Password'/>
        </div>
        <div>
            <span style={{cursor:"pointer"}} >
                Already have an account.Login!</span>
               
        </div>
        <button className="button infoButton" type='submit'>Signup</button>
    </form>
</div>
        
    </Paper>
    
  </Box>
 )
}

export default Signup

// import React from 'react';
// import './Signup.css'
// const Signup = () => {
//   return (
//     <div className="a-right">
//     <form className="infoForm">
//         <h3>Sign up</h3>
//         <div>
//             <input type="text" placeholder='First Name'
//             className='infoInput' name='firstname' />
//                      <input type="text" placeholder='Last Name'
//             className='infoInput' name='lastname' />
//         </div>
//         <div>
//             <input type="text" className='infoInput' name='username'
//             placeholder='Username' />
//         </div>
//         <div>
//             <input type="text" className="infoInput" name='password'
//             placeholder='Password'/>
//                      <input type="text" className="infoInput" name='conformpassword'
//             placeholder='conform Password'/>
//         </div>
//         <div>
//             <span>Already have an account.Login!</span>
//         </div>
//         <button className="button infoButton" type='submit'>Signup</button>
//     </form>
// </div>
//   );
// }

// export default Signup;













