import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// we import the App.jsx file to be used in main.jsx files
createRoot(document.getElementById('root')).render(
    <App />
)
