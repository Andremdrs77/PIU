import './ToDoList.css'
import { useState } from 'react'

export default function ToDoList () {

    const [tarefa, setTarefa] = useState('')
    const [lista, setLista] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        setLista([...lista, tarefa])
        setTarefa('')
    }

    const handleClear = () => {
        setLista([])
    }

    return(
        <>
        <div>
            <h2>Lista de Tarefas </h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="text" onChange={(e) => setTarefa(e.target.value)} value={tarefa}/>
                </label>
                <input type="submit" value="Enviar Tarefa" />
            </form>
        </div>
        <ul>
            {lista.map((item) => <li>{item}</li>)}
        </ul>
        <button onClick={handleClear}>Limpar</button>
        </>
    )
}