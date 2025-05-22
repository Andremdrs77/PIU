import './EscopoReduz.css'

const EscopoReduz = () => {
    function handleClick() {
        return (alert("handleClick"))
    }
    return(
        <>
            <button onClick={() => console.log("Vasco")}>Console Log</button>
            <div>
                <button onClick={() => alert("Vasco")}>Alert</button>
            </div>
            <div>
                <button onClick={handleClick}>Handle Click</button>
            </div>
        </>
    )
}

export default EscopoReduz