import { useState } from 'react'
import Questao1 from './components/Questao1'
import Questao2 from './components/Questao2'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Questao1></Questao1> */}
      <Questao2></Questao2>
    </>
  )
}

export default App
