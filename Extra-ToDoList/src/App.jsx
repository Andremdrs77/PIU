import { useState } from 'react'
import './App.css'
import ToDoList from './components/ToDoList'
import ToDoItem from './components/ToDoItem'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ToDoList>
        <ToDoItem conteudo="Tarefa 1"></ToDoItem>
      </ToDoList>
    </>
  )
}

export default App
