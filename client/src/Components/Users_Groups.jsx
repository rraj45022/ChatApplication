import React, { useState } from 'react'
import chat from "../../Images/chat.jpg"
import { IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import ConversationsItems from './ConversationsItems';

function Users_Groups() {
    const [conversations,setConversations] = useState([
        {
          name: "test1"
        },
        {
          name: "test2",

        },
        {
          name: "test3",

        }
      ])
  return (
    <div className='list-container'>
        <div className="ug-header">
            <img src={chat} alt="" style={{height: "2rem", width: "2rem", padding:"3px"}}/>
            <p className='ug-title'>Online Users</p>
        </div>
        <div className="sb-search">
        <IconButton>
          <SearchIcon/>
        </IconButton>
        <input type="text" placeholder='search' className='search-box'/>
      </div>
      <div className="sb-conversation">
        {conversations.map((conversation)=>{
          return <ConversationsItems props={conversation} key={conversation.name}/>
        })
        }
      </div>
    </div>
  )
}


export default Users_Groups