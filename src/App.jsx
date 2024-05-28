import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Feature from './Components/Feature'
import About from './Components/About'
import Pricing from './Components/Pricing'
import Newsletter from './Components/Newsletter'
import Footer from './shared/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Home/>
      <Feature/>
      <About/>
      <Pricing/>
      <Newsletter/>
      <Footer/>
    </>
  )
}

export default App
