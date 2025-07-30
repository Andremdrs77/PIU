import { useState } from "react"

export default function FixacaoForms () {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({nome, email, senha});
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Digite seu nome" value={nome} onChange={(e) => setNome(e.target.value)}/><br/>
            <input type="password" placeholder="Digite sua senha" value={senha} onChange={(e) => setSenha(e.target.value)}/><br/>
            <input type="email" placeholder="Digite seu email" value={email} onChange={(e) => setEmail(e.target.value)}/><br/>
            <input type="submit" value="Enviar" />
        </form>
        </>
    )
}