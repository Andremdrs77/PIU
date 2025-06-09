import { useState, useEffect } from 'react'
import './Tema.css'

export default function Tema ({children}) {
    const [darkMode, setDarkMode] = useState(false)

    const alternarTema = () => {
        setDarkMode(!darkMode)
    }

    useEffect (() => {
        document.body.className = darkMode ? 'tema dark' : 'tema light'}, [darkMode])

    return (
        <div className="tema-container">
            <button onClick={alternarTema}>
                Mudar para Modo {darkMode ? 'Claro' : 'Escuro'}
            </button>
            <div className='conteudo'>
                {children}
            </div>
        </div>
    )
}