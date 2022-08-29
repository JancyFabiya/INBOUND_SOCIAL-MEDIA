import React, { useState } from "react";
import "./Auth.css";
import Logo from "../../img/log.jpg";
// import Signup from "../../components/Signuup/Signup";
// import Login from "../../components/Login/Login";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../actions/AuthAction";
import { signUp } from "../../api/AuthRequest";
import { TextField } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import { Formik, useField, ErrorMessage } from "formik";
import { FloatingLabel, Form } from "react-bootstrap";
import * as Yup from "yup";

const Auth = () => {
  //yup
  // const validate = Yup.object({
  //   firstname: Yup.string()
  //   .max(15, 'Must be 15 characters or less')
  //   .required('Required'),
  //   lastname: Yup.string()
  //   .max(15, 'Must be 15 characters or less')
  //   .required('Required'),
  //   username: Yup.string()
  //   .email('Email is invalid')
  //   .required('Email is required'),
  //   password: Yup.string()
  //   .min(5, 'Password must be at least 5 characters')
  //   .required('Password is required'),
  //   conformpassword: Yup.string()
  //   .oneOf([Yup.ref('password'),null],'Password must match')
  //   .required('Conform Password is required'),
  // })

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.authReducer.loading);
  const [isSignUp, setIsSignUp] = useState(true);
  console.log(loading);
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    conformpassword: "",
  });
  const [conformPass, setConformPass] = useState(true);
  const [validated, setValidated] = useState(false);
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // //FORMIK
  // const [field,meta] = useField(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);
    if (isSignUp) {
      //    if(data.password !== data.conformpassword){
      //     setConformPass(false)
      //    }
      data.password === data.conformpassword
        ? dispatch(signUp(data))
        : setConformPass(false);
    } else {
      dispatch(logIn(data));
    }
  };

  const resetForm = () => {
    setConformPass(true);
    setData({
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      conformpassword: "",
    });
  };
  return (
    <div className="Auth">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 my-5 ml-4">
            <div className="a-left ">
              <img src={Logo} alt="" />
              <div className="Webname">
                <h6>A place where ideas grow</h6>
              </div>
            </div>
          </div>
          {/* {isSignUp ? <Signup/> : <Login/>} */}
          <div className="col-lg-6">
          {isSignUp && (
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                "& > :not(style)": {
                  m: 1,
                  width: 460,
                  height: 430,
                },
              }}
            >
              
              <Paper elevation={3}>
                <div className="a-right">
                  {/* <Formik
                   initialValues={{
                    firstname: "",
                    lastname: "",
                    username: "",
                    password: "",
                    conformpassword: "",
                   }}
                   validationSchema={validate}
                   >
                    {formik =>( */}
                  <Form
                    noValidate
                    validated={validated}
                    className="infoForm"
                    onSubmit={handleSubmit}
                  >
                    <h3> Sign up </h3>
                   
                      <div>
                        <Form.Group controlId="validationCustomUsername">
                          <FloatingLabel
                            controlId="floatingInput"
                            label="First Name"
                            className="mb-3"
                          >
                            <Form.Control
                              id="outlined-textarea"
                              // label="First Name"
                              placeholder="First Name"
                              className="infoInput"
                              name="firstname"
                              color="warning"
                              onChange={handleChange}
                              value={data.firstname}
                              multiline
                              required
                            />
                          </FloatingLabel>
                          <Form.Control.Feedback type="invalid">
                            Please choos a first-name.
                          </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="validationCustomUsername">
                          <FloatingLabel
                            controlId="floatingInput"
                            label="Last Name"
                            className="mb-3"
                          >
                            <Form.Control
                              id="outlined-textarea"
                              placeholder="Last Name"
                              className="infoInput"
                              name="lastname"
                              color="warning"
                              onChange={handleChange}
                              value={data.lastname}
                              // htmlFor={field.lastname}
                              multiline
                              required
                            />
                          </FloatingLabel>
                          <Form.Control.Feedback type="invalid">
                            Please choose a last-name.
                          </Form.Control.Feedback>
                        </Form.Group>

                        {/* <ErrorMessage name={field.lastname} /> */}
                      </div>
                 

                    
                    <div>
                      <Form.Group controlId="validationCustomUsername">
                        <FloatingLabel
                          controlId="floatingInput"
                          label="Password"
                          className="mb-3"
                        >
                          <Form.Control
                            id="outlined-password-input"
                            placeholder="Password"
                            type="password"
                            className="infoInput"
                            name="password"
                            color="warning"
                            onChange={handleChange}
                            value={data.password}
                            autoComplete="current-password"
                            required
                          />
                        </FloatingLabel>
                        <Form.Control.Feedback type="invalid">
                          Please choose a password.
                        </Form.Control.Feedback>
                      </Form.Group>

                        <Form.Group controlId="validationCustomUsername">
                          <FloatingLabel
                            controlId="floatingInput"
                            label="Conform Password"
                            className="mb-3"
                          >
                            <Form.Control
                              id="outlined-password-input"
                              placeholder="Conform Password"
                              type="password"
                              className="infoInput"
                              name="conformpassword"
                              color="warning"
                              onChange={handleChange}
                              value={data.conformpassword}
                              autoComplete="current-password"
                              required
                            />
                          </FloatingLabel>
                          <Form.Control.Feedback type="invalid">
                            Please choose a conform-password.
                          </Form.Control.Feedback>
                        </Form.Group>
                    
                    </div>
                    <div>
                      <Form.Group controlId="validationCustomUsername">
                        <FloatingLabel
                          controlId="floatingInput"
                          label="Email"
                          className="mb-3"
                        >
                          <Form.Control
                            id="outlined-textarea"
                            placeholder="Email"
                            className="infoInput"
                            name="username"
                            color="warning"
                            onChange={handleChange}
                            value={data.username}
                            multiline
                            required
                          />
                        </FloatingLabel>
                        <Form.Control.Feedback type="invalid">
                          Please choose a Email.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </div>
                    <span
                      style={{
                        display: conformPass ? "none" : "block",
                        color: "red",
                        fontSize: "12px",
                        alignSelf: "flex-end",
                        marginRight: "5px",
                      }}
                    >
                      *Conform Password is not same
                    </span>
                    <div>
                      <span
                        style={{ cursor: "pointer", color: "orange" }}
                        onClick={() => {
                          setIsSignUp((prev) => !prev);
                          resetForm();
                        }}
                      >
                      
                           "Already have an account.Login!"
                         
                      </span>
                    </div>
                    <button
                      className="button infoButton"
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? "Loading..." : "Signup" }
                    </button>
                  </Form>
                  {/* )}
                  </Formik> */}
                </div>
              </Paper>
            </Box>
            )}



{!isSignUp && (
<Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                "& > :not(style)": {
                  m: 1,
                  width: 360,
                  height: 330,
                },
              }}
            >
              
              <Paper elevation={3}>
                <div className="a-right">
                  {/* <Formik
                   initialValues={{
                    firstname: "",
                    lastname: "",
                    username: "",
                    password: "",
                    conformpassword: "",
                   }}
                   validationSchema={validate}
                   >
                    {formik =>( */}
                  <Form
                    noValidate
                    validated={validated}
                    className="infoForm"
                    onSubmit={handleSubmit}
                  >
                    <h3> Log in</h3>
               

                    <div>
                      <Form.Group controlId="validationCustomUsername">
                        <FloatingLabel
                          controlId="floatingInput"
                          label="Email"
                          className="mb-3"
                        >
                          <Form.Control
                            id="outlined-textarea"
                            placeholder="Email"
                            className="infoInput"
                            name="username"
                            color="warning"
                            onChange={handleChange}
                            value={data.username}
                            multiline
                            required
                          />
                        </FloatingLabel>
                        <Form.Control.Feedback type="invalid">
                          Please choose a Email.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </div>
                    <div>
                      <Form.Group controlId="validationCustomUsername">
                        <FloatingLabel
                          controlId="floatingInput"
                          label="Password"
                          className="mb-3"
                        >
                          <Form.Control
                            id="outlined-password-input"
                            placeholder="Password"
                            type="password"
                            className="infoInput"
                            name="password"
                            color="warning"
                            onChange={handleChange}
                            value={data.password}
                            autoComplete="current-password"
                            required
                          />
                        </FloatingLabel>
                        <Form.Control.Feedback type="invalid">
                          Please choose a password.
                        </Form.Control.Feedback>
                      </Form.Group>

                                        </div>
                    <span
                      style={{
                        display: conformPass ? "none" : "block",
                        color: "red",
                        fontSize: "12px",
                        alignSelf: "flex-end",
                        marginRight: "5px",
                      }}
                    >
                      *Conform Password is not same
                    </span>
                    <div>
                      <span
                        style={{ cursor: "pointer", color: "orange" }}
                        onClick={() => {
                          setIsSignUp((prev) => !prev);
                          resetForm();
                        }}
                      >
                       
                           "Don't have an account. Sign up!"
                      </span>
                    </div>
                    <button
                      className="button infoButton"
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? "Loading..." :  "Login"}
                    </button>
                  </Form>
                  {/* )}
                  </Formik> */}
                </div>
              </Paper>
            </Box>
)}
            
          </div>
        </div>
      </div>
    </div>
  );
};

// function signUp(){
//     return(
//         <div className="a-right">
//             <form className="infoForm">
//                 <h3>Sign up</h3>
//                 <div>
//                     <input type="text" placeholder='First Name'
//                     className='infoInput' name='firstname' />
//                 </div>
//             </form>
//         </div>
//     )
// }

export default Auth;
