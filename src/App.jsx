import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import { Dashboard } from '../components/Dashboard'
import { Landing } from '../components/Landing'





function App() {
  const navigate=useNavigate();
  return(
    <div>
      <div>
        <button onClick={()=>{
         navigate('/')

        }}>Lading page</button>


        <button onClick={()=>{
         navigate('/Dashboard')


        }}>Dashboard</button>

       
      </div>
      <br />
  <BrowserRouter>
  <Routes>
    <Route path='/Dashboard' element={<Dashboard/>}></Route>
    <Route path='/' element={<Landing/>}></Route>
  </Routes>

  </BrowserRouter>
  </div>
  )
 
}

export default App
