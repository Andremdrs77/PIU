export default function Detalhe({ imagem, descricao, onClose }) {
  return (
    <div style={{ marginTop: '20px' }}>
      <figure>
        <img src={imagem} alt="Imagem do personagem" style={{ maxWidth: '200px' }} />
        <p>{descricao}</p>
        <button onClick={onClose}>Fechar</button>
      </figure>
    </div>
  )
}
