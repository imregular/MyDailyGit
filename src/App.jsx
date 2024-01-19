import React, { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
//import { Dashboard } from '../components/Dashboard'
// import Dashboard from '../components/Dashboard'
// import  Landing  from '../components/Landing'

const Dashboard = React.lazy(()=>import('../components/Dashboard'))
const Landing =React.lazy(()=>import('../components/Landing'))

function App() {
  //const navigate=useNavigate();
  return(
    
  <BrowserRouter>
  <AppBar/>
  <Routes>
    <Route path='/Dashboard' element={<Suspense fallback={"loading.."}><Dashboard/></Suspense>}></Route>
    <Route path='/' element={<Suspense fallback={"loading.."}><Landing/></Suspense>}></Route>
  </Routes>

  </BrowserRouter>
 
  )
 
}

function AppBar(){
  const navigate=useNavigate();
  return(
    <div>
      <div>
        <button onClick={()=>{
         navigate("/") 

        }}>Landing page</button>


        <button onClick={()=>{
         navigate("/Dashboard")


        }}>Dashboard</button>

       
      </div>
      </div>
  )

}

export default App
