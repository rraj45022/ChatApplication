import React from 'react'
import "./myStyles.css"
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';


function ConversationsItems({props}) {
  const navigate = useNavigate();
  const lightMode = useSelector((state)=>state.themeKey);

  return (
    <div className={"conversation-container" + (lightMode ? "" : " dark")} onClick={()=>{navigate('chat')}}>
      <p className='con-icon'>{props.name[0]}</p>
      <p className='con-title'>{props.name}</p>
      <p className='con-lastMessage'>{props.lastMessage}</p>
      <p className="con-timeStamp">{props.timeStamp}</p>
    </div>

  )
}

export default ConversationsItems;