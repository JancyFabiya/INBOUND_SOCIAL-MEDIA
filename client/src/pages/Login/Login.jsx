import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Button, Card, Container, Form, Row} from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { Link,} from 'react-router-dom';
import { logIn } from "../../actions/AuthAction";
import { googleLogin } from '../../actions/AuthAction';
import Logo from "../../img/log.jpg";


import './Login.css'


const Login = () => {
  
   const [data,setData]=useState({username:"",password:""})
  const dispatch=useDispatch()

  const google=window.google=window.google? window.google:{}

  useEffect(() => {



    google.accounts.id.initialize({
    client_id:"942641737589-8p9d1771hcq0g4e2ukmej1kp5o9r2hoe.apps.googleusercontent.com",
    callback:handleCallbackResponse

    });
    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {theme:"outline",size:"large"}
    )

   
    

  
  }, [])

  const handleCallbackResponse = async (response) => {
    console.log(response)
    try {
      // const result = await  axios({
      //   method: 'POST',
      //   url: ` /auth/googlelogin`,
      //   data: { idToken: response.credential }
      // });
     
    dispatch(googleLogin({idToken: response.credential}))

    } catch (error) {
      console.log(error);
    }
}

  const handleChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
 
  const handleSubmit=(e)=>{
     e.preventDefault()
    
     dispatch(logIn(data))
     
  }
  return (
  <>
            <div className='login'>
              <Container>
                <Row>

                </Row>
              </Container>
              <div className='container'>
               
                <div className='row'>

                <div className='col-lg-6 my-5 ml-5'>
                <img src={Logo} alt="" />
                <div className="Webname">
                <h6>A place where ideas grow</h6>
              </div>
                  </div>
                <div className='col-lg-6'>
                <Card style={{width: '18rem',marginRight:'38rem'}} className='my-5 cardcolor'>
      <Card.Body>
         <Form onSubmit={handleSubmit}>
         <div className ="title1">Login</div>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  name="username" value={data.username} onChange={handleChange}/>
       
      </Form.Group>

      <Form.Group className="mb-3 ms-auto" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password" value={data.password}  onChange={handleChange}/>
      </Form.Group>
      <div className='ms-auto'>
      <Button variant="warning" type="submit">
        Submit
      </Button>
      </div>
    {/* <h6 style={{textAlign:'center'}}>OR</h6>
    <h6 style={{textAlign:'center'}}>Forget Password</h6> */}
    <span
     style={{cursor:"pointer",color:"black"}}
    
     >
      Don't have an Account?<Link style={{textDecoration: "none",color: "orange"}} to='/auth' className='link'> Signup</Link></span>
      <Link to='/auth'>
      {/* <div id='signInDiv'>

</div> */}
</Link>
    </Form>
      </Card.Body>
    </Card>
    </div>
    </div>
    
    </div>

  </div>
         
    </>
  )
}

export default Login