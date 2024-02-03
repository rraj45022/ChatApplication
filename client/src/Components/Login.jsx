import React from 'react'
import chat from "../../Images/chat.jpg"
import { Button, TextField } from '@mui/material'

function Login() {
  return (
    
    <div className='login-container'>
        <div className='login-logo'>
            <img src={chat} alt="" className='welcome-logo'/>
        </div>
        <div className='login-box'>
            <p>Login to your Account</p>
            <TextField id="standard-basic" label="Enter Username" variant="outlined" />
            <TextField id="outlined-password-input" label="Enter Password" variant="outlined" type='Password' autoComplete='current-password'/>
            <Button variant="outlined">Login</Button>
        </div>
    </div>
  )
}

export default Login