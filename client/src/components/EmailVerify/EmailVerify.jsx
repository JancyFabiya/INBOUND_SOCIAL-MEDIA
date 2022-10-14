import React, { useState } from 'react'
import { Button, Card, Container, Form, Row } from 'react-bootstrap'
import axios from 'axios'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import Logo from "../../img/log.jpg";


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

                <div className="col-lg-6 my-5 ml-5">
              <img src={Logo} alt="" />
              <div className="Webname">
                <h6>A place where ideas grow</h6>
              </div>
                  </div>
                <div className='col-lg-6'>
                <Card style={{width: '18rem',marginRight:'38rem'}} className='my-5 cardcolor'>
                 
      <Card.Body>
         <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Please check your email</Form.Label>
        <Form.Control type="text" placeholder="Enter Otp" name='otp' value={otp} onChange={(e)=>setOTP(e.target.value)}/>
       
      </Form.Group>

      
      <div className='ms-auto'>
      <Button variant="warning" type="submit">
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
