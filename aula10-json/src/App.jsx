import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RepoJson from './components/RepoJson'
import EnviarDados from './components/EnviarDados'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <RepoJson/> */}
      <EnviarDados/>
    </>
  )
}

export default App
