import React, { useState } from 'react'
import './Tema.css'

export default function Tema() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  }

  return (
    <div className={darkMode ? 'tema dark' : 'tema light'}>
      <h1>{darkMode ? 'Modo Escuro' : 'Modo Claro'}</h1>
      <button onClick={toggleTheme}>
        Mudar para {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
}