import React from 'react'
import chat from "../../Images/chat.jpg"
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Welcome() {
  const lightTheme = useSelector((state) =>state.themeKey);
  const userData = JSON.parse(localStorage.getItem("userData"));
  console.log(userData);
  const nav = useNavigate();
  if(!userData){
    console.log("User not Authenticated");
    nav("/");
  }

  return (
    <div className='welcome-container'>
      <img src={chat} alt="logo" className='welcome-logo' />
      <p>Hi {userData && userData.data.name} 👋</p>
      <p>View and chat directly</p>
    </div>
  )
}

export default Welcome