import './Galeria.css'

export default function Galeria (props) {

    return (
    <>
        <div className="galeria">
            {props.children}
        </div>
    </>
    )
}