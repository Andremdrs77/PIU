import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Info1V from './components/Info1V.jsx'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Info1V/>
  </StrictMode>,
)
