import React from 'react'
import chat from "../../Images/chat.jpg"

function Welcome() {
  return (
    <div className='welcome-container'>
      <img src={chat} alt="logo" className='welcome-logo' />
      <p>View and chat directly</p>
    </div>
  )
}

export default Welcome