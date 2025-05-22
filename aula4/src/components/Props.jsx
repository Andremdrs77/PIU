export default function Props (props) {

    return (
        <>
            <div>
                <h2>Teste props</h2>
                <p>O nome {props.name} foi enviado via props</p>
                <p>Novo nome: {props.newname}</p>
            </div>
        </>
    )
}
