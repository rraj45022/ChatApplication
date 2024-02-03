import { useState } from 'react'
import "./App.css"
import MainContainer from './Components/MainContainer'

import Login from './Components/Login'
import { Route, Routes } from 'react-router-dom'
import Welcome from './Components/Welcome'
import Users_Groups from './Components/Users_Groups'
import CreateGroups from './Components/CreateGroups'
import ChatArea from './Components/ChatArea'

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='app' element={<MainContainer/>}>
          <Route path='welcome' element={<Welcome/>}/>
          <Route path='chat' element={<ChatArea/>}/>
          <Route path='users' element={<Users_Groups/>}/>
          <Route path='create-groups' element={<CreateGroups/>}/>
        </Route>
        </Routes>
    </div>
  )
}

export default App
