import {obj} from './dados.js'

export default function ListaObj () {

    const selecionados = obj.filter (selecionado => selecionado.idade > 10)

    return (
        <div>
            <ul>
                {selecionados.map(selecionado => (
                    <li style={{fontSize: '36px'}} key={selecionado.id}>
                        <p>O nome selecionado foi {selecionado.nome}.</p>
                    </li>
                ))}
            </ul>
        </div>
    )
    
}

