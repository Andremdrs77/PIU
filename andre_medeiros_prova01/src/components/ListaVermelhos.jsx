import { carros } from './dados_carros.js'

export default function ListaCarros () {
    const vermelhos = carros.filter(carro => carro.cor === 'vermelho')
    // Cria um objeto 'carros' filtrado, apenas com os carros com o atributo cor igual a 'vermelho.
    return (
        <div>
          <h1 style={{color: 'red'}}>Lista de Carros Vermelhos</h1>
          <ul>
            {vermelhos.map((carro) => (
              <li key={carro.id}>
                Carro {carro.id}: {carro.modelo} de {carro.ano}.
               </li>
            ))}
            {/* Um map qualquer, que percorre 'vermelhos' ao invés de 'carros' 
            PS: o comentário em html e até python não deu certo, coloquei aqui embaixo mesmo. */}
          </ul>
        </div>
      );
}