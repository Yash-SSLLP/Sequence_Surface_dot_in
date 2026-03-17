// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Hero from './Components/HeroSection/Hero'

import NavBar from './Components/NavBar/NavBar'
import NewLaunch from './Components/NewLaunch/NewLaunch'

function App(){

  return (
    <>
    <NavBar></NavBar>
    <Hero></Hero>
    <NewLaunch></NewLaunch>
    </>
  )
}

export default App
