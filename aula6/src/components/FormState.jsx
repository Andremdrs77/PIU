import { useState } from "react"
import "./FormState.css"

export default function FormState() {
    const [name, setName] = useState('');
    const [idade, setIdade] = useState('');
    const [bio, setBio] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, idade, bio);
    }

    return (
        <>
            <h1>Formulário com useState e onChange</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        <span>Nome: </span>
                        <input type="text" name="nome" onChange={(e) => setName(e.target.value)} value={name} />
                        <p>Nome: {name}</p>
                    </label>
                </div>
                <div>
                    <label>
                        <span>Idade: </span>
                        <input type="number" name="idade" onChange={(e) => setIdade(e.target.value)} value={idade} />
                        <p>Idade: {idade}</p>
                    </label>
                </div>
                <div>
                    <label>
                        <span>Bio: </span>
                        <textarea name="bio" onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
                        <p>Bio: {bio}</p>
                    </label>
                </div>
                <button type="submit">Enviar</button>
            </form>
        </>
    );
}
