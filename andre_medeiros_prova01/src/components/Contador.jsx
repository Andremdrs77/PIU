import { useState } from "react"

export default function Contador () {
    const [Count, setCount] = useState(0) 
    {/* O Usestate vai guardar e mostrar ou alterar o valor do contador, quando chamado.*/}

    return (

        <div>
            <p>Cliques: {Count}</p>
            {Count <= 10 && 
            <button onClick={() => setCount((Count) => Count + 1)}>
                +1
            </button> } {/* Este botão só existe pra quando ainda não passamos de 10, e tem a função de aumentar o contador em 1... */}
            {Count > 10 && 
            <button style={{backgroundColor: 'lightgreen'}} onClick={() => setCount((Count) => Count + 1)}>
                +1
            </button> } {/* Esse outro tem a mesma função, e aparece substituindo o outro que sumiu, mas pra quando passamos de 10.
             O mesmo acontece com os botões abaixo, só que a verificação é pra se o contador está ou não negativo, além da função de diminuir o contador. */}
            {Count >= 0 && 
            <button onClick={() => setCount((Count) => Count - 1)}>
                -1
            </button> }
            {Count < 0 && 
            <button style={{backgroundColor: 'pink'}} onClick={() => setCount((Count) => Count - 1)}>
                -1
            </button> }
        </div>

    )
}