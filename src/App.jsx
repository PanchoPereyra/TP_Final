import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "tailwindcss"
import Footer from './components/Footer'
import Datos from './components/Datos'
import Comunidad from './components/Comunidad'
import OurTeam from './components/OurTeam'
import Testimonial from './components/Testimonial'
import HelpOther from './components/HelpOther'
import HeaderCompleto from './components/HeaderCompleto'
import AboutUs from './components/AboutUs'



function App() {
  // const [count, setCount] = useState(0)

  return (
    <>

      <HeaderCompleto />
      <div className="bg-orange-50">
        <Datos />
        <Comunidad />
        <AboutUs />

        <OurTeam />
        <Testimonial />
        <HelpOther />

      </div>

      <Footer />

    </>
  )
}

export default App
