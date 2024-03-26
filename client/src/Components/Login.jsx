import React, { useState } from 'react'
import chat from "../../Images/chat.jpg"
import { Button, TextField } from '@mui/material'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Login() {
  const [showLogin, setShowLogin] = useState(false);
  const [data, setData] = useState({name : "", email: "", password: ""});
  const [loading, setLoading] = useState(false);
  const [loginStatus,  setLoginStatus] = useState("");
  const [signInStatus,  setSignInStatus] = useState("");
  const navigate = useNavigate();

  const changeHandler = (e)=>{
    setData({...data,[e.target.name]: e.target.value});
  }
  const loginHandler = async (e)=>{
    setLoading(true);
    console.log(data);
    try{
      const config = {
        headers : {
          "Content-type": "application/json",
      },
    };
    const response = await axios.post(
      "http://localhost:3000/user/login/",
      data,
      config
    );
    console.log("Login : ",response);
    setLoginStatus({msg : "Success", key: Math.random()});
    setLoading(false);
    localStorage.setItem("userData", JSON.stringify(response));
    navigate("/app/welcome");
  }
  catch(error){

  }
  
}
const signUpHandler =  async(e)=>{
  setLoading(true);
  try{
    const config = {
      headers:{
        'Content-Type': 'application/json'
      },
    };
    // send the POST request
    const response = axios.post(
      "http://localhost:3000/user/register/",
      data,
      config
    );
    console.log(response);
    setSignInStatus({msg: "Success", key: Math.random()});
    setLoading(false);
    localStorage.setItem("userData", JSON.stringify(response));
    navigate("/app/welcome");
    
    
  }
  catch(error){
    console.log(error);
    if (error.response.status === 405){
      setLoginStatus({
        msg: "User already exists.",
        key: Math.random(),
      });
    };
    setLoading(false);
  };
}
  return (
    
    <div className='login-container'>
        <div className='login-logo'>
            <img src={chat} alt="" className='welcome-logo'/>
        </div>
        <div className='login-box'>
          {showLogin ? 
            (<h1>Login to your Account</h1>) 
            : (<h1>SignUp to Your Account</h1>)
          }
            <TextField onChange={changeHandler} id="standard-basic1" name="name" value={data.name} label="Enter Username" variant="outlined" />
            {!showLogin && (<TextField onChange={changeHandler} id='standard-basic2' value={data.email} label="Enter Email Address" variant='outlined'name='email'/>)}
            <TextField  onChange={changeHandler} name="password" id="outlined-password-input" value={data.password}  label="Enter Password" variant="outlined" type='Password' autoComplete='current-password'/>
            {!showLogin ? (<Button onClick={signUpHandler} variant="outlined">SignUp</Button>) : (<Button onClick={loginHandler} variant="outlined">Login</Button> )}
            {!showLogin && (<p>Already have an account? <Button onClick={()=>{setShowLogin(true)}}>Login</Button></p>)}
            <p> {loginStatus.msg} </p>
            {showLogin && (<p>Dont have an account? <Button onClick={()=>{setShowLogin(false)}}>Sign Up</Button></p>)}
            <p> {loginStatus.msg} </p>
        </div>
    </div>
  )
}

export default Login