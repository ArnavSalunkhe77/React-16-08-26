import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'
function App() {

  return (
    <>
    <h1 className="bg-green-400 text-white p-4 rounded-md text-center text-2xl font-bold">
      Hello Tailwind!
    </h1>
    <Card username='Tom Holland' title='(Spider-man - BrandNewDay)'/>
    <Card username='Andrew Garfield' title='(The amazing spider-man)'/>
    
    </>
  )
}

export default App
