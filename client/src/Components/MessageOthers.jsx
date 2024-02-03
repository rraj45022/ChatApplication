import React from 'react'
import { useSelector } from 'react-redux';

function MessageOthers() {
    var props1 = { name: "test1", message: "Sample Message whr i veh veiv erh eei rehre"}
    const lightMode = useSelector((state)=>state.themeKey);

  return (
    <div className='other-message-container'>
        <div className='conversation-container'>
            <p className='con-icon'>{props1.name[0]}</p>
            <div className={"omessageBox" + (lightMode ? "" : " dark")}>
                <p className='con-title'>{props1.name}</p>
                <p className='con-lastMessage'>{props1.message}</p>
                <p className={"con-timeStamp" + (lightMode ? "" : " dark")}>12:00am</p>
            </div>
        </div>
    </div>
  )
}

export default MessageOthers