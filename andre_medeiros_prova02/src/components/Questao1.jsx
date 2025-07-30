import { useState } from "react"

export default function Questao1 () {
    const [login, setLogin] = useState('')
    const [senha, setSenha] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if (senha === 'AlunoPIU') {
            document.body.style.backgroundColor = 'blue'
        } else {
            document.body.style.backgroundColor = 'white'
        }
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Digite seu login" value={login} onChange={(e) => setLogin(e.target.value)}/><br/>
            <input type="text" placeholder="Digite sua senha" value={senha} onChange={(e) => setSenha(e.target.value)}/><br/>
            <input type="submit" value="Enviar" />
        </form>
        </>
    )
}