import React, { useState } from 'react'
import { Button, Card, Container, Form, Row } from 'react-bootstrap'
import axios from 'axios'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'

const EmailVerify = () => {

//  let axioss= "http://localhost:5000"
    const {user} = useSelector((state)=>state.authReducer.authData)
console.log('verryt',user);

  
   const userId=user._id
   
  
  const navigate=useNavigate()
  const [otp,setOTP]=useState("")
 
   const submitHandler=async(e)=>{
     e.preventDefault()
    
     const data=await axios.post("http://localhost:5000/auth/verifyemail",{otp,userId});

     
        if(data){
            navigate('/home')
        } 
      // emailverify()
   }  
    

    
  return (
    <div>
          <div className='login'>
              <Container>
                <Row>

                </Row>
              </Container>
              <div className='container'>
               
                <div className='row'>

                <div className='col-lg-6 my-5 ml-5'>
                  <h3 className='loginLogo'>Bezziegram</h3>
                  <span>
                    Connect with friends and the world around you on Bezziegram.
                  </span>
                  </div>
                <div className='col-lg-6'>
                <Card style={{width: '18rem'}} className='my-5 cardcolor'>
                 
      <Card.Body>
         <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>OTP</Form.Label>
        <Form.Control type="text" placeholder="Enter Otp" name='otp' value={otp} onChange={(e)=>setOTP(e.target.value)}/>
       
      </Form.Group>

      
      <div className='ms-auto'>
      <Button variant="danger" type="submit">
       Verify
      </Button>

    
      </div>
  
    </Form>
      </Card.Body>
    </Card>
    </div>
    </div>
    
    </div>

  </div>
    </div>
  )
}

export default EmailVerify
