import { useState } from "react"
import './Info1V.css'


export default function Info1V () {
    // let valor = 0

    let [valor, setValor] = useState(2000000000000)
    let[mostrar, setMostrar] = useState(true)

    function toggleMostrar() { 
        setMostrar(!mostrar)
    }

    function numeric() {
        let aux = valor + 1
        setValor(aux)
    }



    return (
        <>
            <div>
                <button onClick={toggleMostrar}>
                    {mostrar ? "Esconder" : "Mostrar"}
                </button>

                {mostrar && (
                    <div>
                        <p>Apareceu!!</p>
                    </div>
                )} 
                <button onClick={numeric}>{valor}</button>
            </div>
        </>
    )
}

