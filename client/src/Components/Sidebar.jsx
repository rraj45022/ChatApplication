import React, { useState } from 'react'
import "./myStyles.css"
import PersonIcon from '@mui/icons-material/Person';
import { IconButton } from '@mui/material';
import NightlightIcon from '@mui/icons-material/Nightlight';
import LightModeIcon from '@mui/icons-material/LightMode';
import AddIcon from '@mui/icons-material/Add';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import SearchIcon from '@mui/icons-material/Search';
import ConversationsItems from './ConversationsItems';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../Features/themeSlice';

function Sidebar() {
  const conversations = [
    {
      name: "test1",
      lastMessage:"Hey! How are you?",
      timeStamp: "today"
    },
    {
      name: "test2",
      lastMessage:"Hey! How are you?",
      timeStamp: "today"
    },
    {
      name: "test3",
      lastMessage:"Hey! How are you?",
      timeStamp: "today"
    }
  ]
  const lightMode = useSelector((state)=>state.themeKey);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  return (
    <div className='sidebar-container'>
      <div className={"sb-header" + (lightMode ? "" : " dark")}>
    
          <IconButton>
            <PersonIcon className={"icon" + (lightMode ? "" : " dark")} />
          </IconButton>
        
        <div className='otherIcons'>
          <IconButton onClick={()=>{navigate('users')}}> 
            <PersonAddIcon className={"icon" + (lightMode ? "" : " dark")} />
          </IconButton>
          <IconButton onClick={()=>{navigate('users')}}>
            <GroupAddIcon className={"icon" + (lightMode ? "" : " dark")} />
          </IconButton>
          <IconButton onClick={()=>{navigate('create-groups')}}>
            <AddIcon className={"icon" + (lightMode ? "" : " dark")} />
          </IconButton>
          <IconButton onClick={()=>{dispatch(toggleTheme())}}>
            {lightMode && 
            (<NightlightIcon 
              className={"icon" + (lightMode ? "" : " dark")}
              />)} 
            {!lightMode && 
            (<LightModeIcon 
              className={"icon" + (lightMode ? "" : " dark")}
              />
              )}
          </IconButton>
        </div>
      </div>
      <div className={"sb-search" + (lightMode ? "" : " dark")}>
        <IconButton>
          <SearchIcon className={"icon" + (lightMode ? "" : " dark")}/>
        </IconButton>
        <input type="text" placeholder='search' className={"search-box" + (lightMode ? "" : " dark")}/>
      </div>
      <div className={"sb-conversation" + (lightMode ? "" : " dark")}>
        {conversations.map((conversation)=>{
          return <ConversationsItems props={conversation} key={conversation.name} />
        })
        }
      </div>
    </div>
  )
}

export default Sidebar