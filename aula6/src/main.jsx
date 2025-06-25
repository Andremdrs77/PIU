import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import FirstForm from './components/FirstForm.jsx'
import FormState from './components/FormState.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FirstForm/>
    <FormState/>
  </StrictMode>,
)
