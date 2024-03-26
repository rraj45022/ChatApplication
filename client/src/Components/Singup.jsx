import React from 'react'
import chat from "../../Images/chat.jpg"
import { Button, TextField } from '@mui/material'


function SignUp() {
  return (
    
    <div className='login-container'>
        <div className='login-logo'>
            <img src={chat} alt="" className='welcome-logo'/>
        </div>
        <div className='login-box'>
            <h1>Create Your Account</h1>
            <TextField id="standard-basic" label="Enter Username" variant="outlined" />
            <TextField id="standard-basic" label="Enter Email" variant="outlined" />
            <TextField id="outlined-password-input" label="Enter Password" variant="outlined" type='Password' autoComplete='current-password'/>
            <Button variant="outlined">Sign Up</Button>
            <p>Already have an account? <a href="/login">Login</a></p>
        </div>
    </div>
  )
}

export default SignUp;