import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Content from './components/Content'
import DownloadApp from './components/DownloadApp'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Content />
      <DownloadApp />
      <Footer />
    </div>
  )
}

export default App
