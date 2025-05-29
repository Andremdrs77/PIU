import {times} from './dados.js'

export default function ListaFilter() {
    const maiordetodos = times.filter(time => time === 'Vasco')

    return (
        <div>
            <ul>
                {maiordetodos.map(maior => (
                    <li style={{fontSize: '36px',}}>
                        {maior}
                    </li>
                ))}
            </ul>
        </div>
    )
}