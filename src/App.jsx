import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "tailwindcss"
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Datos from './components/Datos'
import Comunidad from './components/Comunidad'
import OurTeam from './components/OurTeam'
import Testimonial from './components/Testimonial'
import CTA from './components/CTA'
import HeaderCompleto from './components/HeaderCompleto'
import AboutUs from './components/AboutUs'



function App() {
  // const [count, setCount] = useState(0)

  return (
    <>

      {/* <Header /> */}
      <HeaderCompleto />
      {/* <Hero/> */}

      <div className="bg-orange-50">
        <Datos />
        <Comunidad />
        <AboutUs />

        <OurTeam />
        <Testimonial />
        <CTA />

      </div>

      <Footer />

    </>
  )
}

export default App
