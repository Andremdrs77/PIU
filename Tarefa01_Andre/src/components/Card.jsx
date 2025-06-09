import './Card.css'

export default function Card(props) {
  return (
    <div className="card" onClick={props.onClick}>
      <figure>
        <img 
          src={props.imagem} alt="Imagem abstrata" />
        <figcaption>{props.nome}</figcaption>
      </figure>
    </div>
  )
}