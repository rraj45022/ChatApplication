import React from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import {IconButton} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import MessageOthers from './MessageOthers';
import MessageSelf from './MessageSelf';
import { useSelector } from 'react-redux';



function ChatArea() {
    const conversations= 
    {
      name: "test1",
      lastMessage:"Hey! How are you?",
      timeStamp: "today"
    };
    var props = conversations;
    const lightMode = useSelector((state)=>state.themeKey);

  return (
    <div className='chatArea-container'>
        <div className={"chatArea-header" + (lightMode ? "" : " dark")}>
            <p className='con-icon'>
                {props.name[0]}
            </p>

            <div className='chatArea-header-text'>
                <p className={"con-title" + (lightMode ? "" : " dark")}>{props.name} </p>
             <p className={"con-timeStamp" + (lightMode ? "" : " dark")}>{props.timeStamp}</p>
            </div>
            
            <IconButton>
                <ClearIcon/>
            </IconButton>
            
        </div>
        <div className={"message-container" + (lightMode ? "" : " dark")}>
            <MessageOthers/>
            <MessageSelf/>
            <MessageOthers/>
            <MessageSelf/>
            <MessageOthers/>
            <MessageSelf/>
        </div>
        <div className={"text-input-area" + (lightMode ? "" : " dark")}>
            <input type="text" placeholder='Type a Message' className={"search-box" + (lightMode ? "" : " dark")} />
            <IconButton>
                <SendIcon/>
            </IconButton>
        </div>
    </div>
  )
}

export default ChatArea