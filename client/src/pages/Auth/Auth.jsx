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
import {Formik , Form, useField,ErrorMessage} from 'formik';
import * as Yup from 'yup';


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
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // //FORMIK
  // const [field,meta] = useField(data);

  const handleSubmit = (e) => {
    e.preventDefault();

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
                  <form className="infoForm" onSubmit={handleSubmit}>
                    <h3>{isSignUp ? "Sign up" : "Log in"}</h3>
                    {isSignUp && (
                      <div>
                        <TextField
                          id="outlined-textarea"
                          label="First Name"
                          className="infoInput"
                          name="firstname"
                          color="warning"
                          onChange={handleChange}
                          value={data.firstname}
                          multiline
                        />
                        <TextField
                          id="outlined-textarea"
                          label="Last Name"
                          className="infoInput"
                          name="lastname"
                          color="warning"
                          onChange={handleChange}
                          value={data.lastname}
                          // htmlFor={field.lastname}
                          multiline
                        />
                        {/* <ErrorMessage name={field.lastname} /> */}
                      </div>
                    )}

                    <div>
                      <TextField
                        id="outlined-textarea"
                        label="Email"
                        className="infoInput"
                        name="username"
                        color="warning"
                        onChange={handleChange}
                        value={data.username}
                        multiline
                      />
                    </div>
                    <div>
                      <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        className="infoInput"
                        name="password"
                        color="warning"
                        onChange={handleChange}
                        value={data.password}
                        autoComplete="current-password"
                      />

                      {isSignUp && (
                        <TextField
                          id="outlined-password-input"
                          label="conform Password"
                          type="password"
                          className="infoInput"
                          name="conformpassword"
                          color="warning"
                          onChange={handleChange}
                          value={data.conformpassword}
                          autoComplete="current-password"
                        />
                      )}
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
                        {isSignUp
                          ? "Already have an account.Login!"
                          : "Don't have an account. Sign up!"}
                      </span>
                    </div>
                    <button
                      className="button infoButton"
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? "Loading..." : isSignUp ? "Signup" : "Login"}
                      
                    </button>
                    
                  </form>
                  {/* )}
                  </Formik> */}
                </div>
              </Paper>
            </Box>
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
