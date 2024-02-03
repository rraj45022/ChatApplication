import DoneOutlineRoundedIcon from '@mui/icons-material/DoneOutlineRounded';
import { IconButton } from '@mui/material'
import React from 'react'

function CreateGroups() {
  return (
    <div className="createGroups-container">
        <input type="text" className='search-box' placeholder='Enter group name'/>
        <IconButton>
            <DoneOutlineRoundedIcon/>
        </IconButton>
    </div>
  )
}

export default CreateGroups