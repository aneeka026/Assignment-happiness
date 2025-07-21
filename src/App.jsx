import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Homepage/Homepage'
import Contact from './pages/Contact/Contact'
import React from 'react'
import Navbar from './components/Navbar'
import Services from './pages/Services/Services'
import About from './pages/About/About'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
