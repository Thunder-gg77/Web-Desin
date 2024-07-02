import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Reg from './components/Reg'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import First from './components/First'
import Tab from './components/Tab'


function App() {
 

  return (
    <>
    

    <Navbar/>
    <Routes>
      <Route path='/'element={<First/>}/>
      <Route path='/r'element={<Reg/>}/>
      <Route path='/t'element={<Tab/>}/>
    </Routes> 
    </>

  )
}

export default App
