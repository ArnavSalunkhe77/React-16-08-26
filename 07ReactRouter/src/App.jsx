import { useState } from 'react'
import './App.css'
import Footer from '../components/footer/footer'
import Headers from '../components/header/header'
import Home from '../components/home/Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Headers />
      <Home />
      <Footer />
    </>
  )
}

export default App
