import { carros } from './dados_carros.js'

export default function ListaCarros () {

    return (
        <div>
          <h1>Lista de Carros</h1>
          <ul>
            {carros.map((carro) => (
              <li key={carro.id}>
                Carro {carro.id}: {carro.modelo} de {carro.ano}.
              </li> 
            ))}
            {/* Função 'map', que percorre toda uma lista de dados para encontrar cada dado. Parecido com um 'for' em Python, e, neste caso
            percorre um objeto, no qual cada atributo (modelo, cor, etc.) é um valor. */}
          </ul>
        </div>
      );
}