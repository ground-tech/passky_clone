import 'react'
import { Header } from './components/Header'
import Footer from './components/Footer'

import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import About from './pages/About'



export const App = () => {
  return (
    <>
    
    <Header />
    <main>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/pricing" element={<Pricing />} />
    <Route path="/about" element={<About />} />
    </Routes>
    </main>
    <Footer />
    </>
  )
}

export default App