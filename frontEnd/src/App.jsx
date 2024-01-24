import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Login'
import SignUp from './SignUp'
import Model from './Model'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='/model'element={<Model />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
