export default function Detalhes({ imagem, nome, onClose }) {
  return (
    <div className="detalhes-overlay">
      <div className="detalhes-content">
        <button onClick={onClose} className="fechar-btn">X</button>
        <img src={imagem} alt={nome} className="detalhes-img" />
        <h2>{nome}</h2>
      </div>
    </div>
  )
}