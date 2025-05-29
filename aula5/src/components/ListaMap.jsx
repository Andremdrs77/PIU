import {nomes} from './dados.js'

export default function ListaMap() {

    return (
        <>
            <div>
                <ul>
                    {nomes.map(nome => (
                        <li style={{fontSize: '24px'}}>{nome}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}