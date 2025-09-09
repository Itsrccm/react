import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import RegisterPage from './components/RegisterPage'
import Login  from './components/login'
import Cart from './components/Cart'
import Pizza from './components/Pizza'
import './App.css'

function App() {


  return (
    <>
      <div>
        <Navbar />
       {/*  <Home /> */}
        {/* <RegisterPage /> */}
        {/* <Login /> */}
      {/*   <Cart /> */}
      <Pizza />


        <Footer />
        
      </div>
      
    </>
  )
}

export default App
