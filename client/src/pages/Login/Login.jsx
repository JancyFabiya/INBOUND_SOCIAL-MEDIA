import React from 'react'
import { useState } from 'react';
import { Button, Card, Container, Form, Row} from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { Link,} from 'react-router-dom';
import { logIn } from "../../actions/AuthAction";
import Logo from "../../img/log.jpg";


import './Login.css'


const Login = () => {
  
   const [data,setData]=useState({username:"",password:""})
  const dispatch=useDispatch()
  
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
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  name="username" value={data.username} onChange={handleChange}/>
       
      </Form.Group>

      <Form.Group className="mb-3 ms-auto" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password" value={data.password}  onChange={handleChange}/>
      </Form.Group>
      <div className='ms-auto'>
      <Button variant="danger" type="submit">
        Submit
      </Button>
      </div>
    <h6 style={{textAlign:'center'}}>OR</h6>
    <h6 style={{textAlign:'center'}}>Forget Password</h6>
    <span
     style={{cursor:"pointer",color:"black"}}
    
     >
      Don't have an Account?<Link style={{textDecoration: "none",color: "orange"}} to='/auth' className='link'> Signup</Link></span>
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