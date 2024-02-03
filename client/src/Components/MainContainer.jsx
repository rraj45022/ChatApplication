import {React, useState} from 'react'
// import "./myStyles.css"

import Sidebar from './Sidebar'
import Welcome from './Welcome';
import CreateGroups from './CreateGroups';
import ChatArea from './ChatArea';
import Users_Groups from './Users_Groups';
import { Outlet } from 'react-router-dom';

function MainContainer() {
  

  return (
    <div className='main-container'>
        <Sidebar/>
        <Outlet/>

    </div>
  )
}

export default MainContainer